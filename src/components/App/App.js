import { Component } from 'react';

import MainMenu from '../MainMenu/MainMenu';
import Footer from '../Footer/Footer';
import CakeBuilder from '../CakeBuilder/CakeBuilder';
import IngredientsPicker from '../IngredientsPicker/IngredientsPicker';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      calories: 0,
      allergi: ['peanut', 'honey'],
      topping: 'glaze',
      cakeHeight: 20,
      disabled: 0,

    }
    this.maxLayers = 6;
  }




  addCakeLayer = (biscuit = 'regularBiscuit', thick = 1, caloriesInput = 300, cost = 100) => {
    thick = Number(thick);
    let disabled;
    let calories = caloriesInput + this.state.calories;

    if (this.state.data.reduce((partialSum, { thick }) => partialSum + Number(thick), 0) >= 6) {
      this.setState({
        disabled: 1,
      });
      return;
    }
    

    this.setState({
      data: this.state.data.concat(
        [{
          type: `${biscuit}`,
          color: 'brown',
          thick: `${thick}`,
          calories: `${calories}`,
          cost: `${cost}`,
          id: `${this.state.data.length}`,
        }]
      ),
      calories: calories,
      disabled: disabled,
      
    });
    
  }


  render() {
    const { calories } = this.state;
    const { data, topping ,disabled} = this.state;


    return (
      <div className='wrapper'>
        <MainMenu />
        <CakeBuilder data={data} hasTopping={topping}/>
        <Footer calories={calories} />
        <IngredientsPicker onAdd={this.addCakeLayer} disabled={disabled}/>
      </div>
    );
  }
}


export default App;
