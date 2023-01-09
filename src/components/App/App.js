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
      calories: 500,
      allergi: ['peanut', 'honey'],
      topping: 'glaze',
      cakeHeight: 20,

    }
    this.maxLayers = 6;
  }

  // 



  // let result = data.map((item) => {
  //   this.setState({ currentHeight: 40 });
  //   return this.cakeLayer(this.state.currentHeight);
  // });


  addCakeLayer = (biscuit = 'regularBiscuit', thick = 1, calories = 300, cost = 100) => {


    thick = Number(thick);
    if (this.state.data.reduce((partialSum, { thick }) => partialSum + Number(thick), 0) >= 6) {
      return;
    }


    // this.setState({
    //   data: [{
    //     type: `${biscuit}`,
    //     color: 'brown',
    //     thick: `${thick}`,
    //     calories: `${calories}`,
    //     cost: `${cost}`,
    //     id: `${this.state.data.length}`,
    //   }].concat(this.state.data)
    // });


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
      )
    });

    console.log(this.state.data);
  }


  render() {
    const { calories } = this.state;
    const { data, topping } = this.state;


    return (
      <div className='wrapper'>
        <MainMenu />
        <CakeBuilder data={data} hasTopping={topping} />
        <Footer calories={calories} />
        <IngredientsPicker onAdd={this.addCakeLayer} />
      </div>
    );
  }
}


export default App;
