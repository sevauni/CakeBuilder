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
      data: [
        { type: 'biscuit', color: 'brown', thick: "1", hasTopping: false, calories: 500, cost: 300, id: 1 },
        { type: 'biscuit', color: 'brown', thick: "1", hasTopping: false, calories: 500, cost: 300, id: 2 },
        { type: 'biscuit', color: 'brown', thick: "1", hasTopping: false, calories: 500, cost: 300, id: 3 },
      ],
      calories: 500,
      allergi: ['peanut', 'honey']
    }
    this.maxLayers = 6;
  }
    
  

// deleteItem = (id) => {
//   this.setState(({ data }) => {
//     return {
//       data: data.filter(item => item.id !== id)
//     }
//   })
// }
// // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
// addItem = (name, salary) => {
//   const newItem = {
//     name,
//     salary,
//     increase: false,
//     rise: false,
//     id: this.maxId++
//   }
//   this.setState(({ data }) => {
//     const newArr = [...data, newItem];
//     return {
//       data: newArr
//     }
//   });
// }

// onToggleProp = (id, prop) => {
//   this.setState(({ data }) => ({
//     data: data.map(item => {
//       if (item.id === id) {
//         return { ...item, [prop]: !item[prop] }
//       }
//       return item;
//     })
//   }))
// }

// searchEmp = (items, term) => {
//   if (term.length === 0) {
//     return items;
//   }

//   return items.filter(item => {
//     return item.name.indexOf(term) > -1
//   })
// }

// onUpdateSearch = (term) => {
//   this.setState({ term });
// }

// filterPost = (items, filter) => {
//   switch (filter) {
//     case 'rise':
//       return items.filter(item => item.rise);
//     case 'moreThen1000':
//       return items.filter(item => item.salary > 1000);
//     default:
//       return items
//   }
// }

// onFilterSelect = (filter) => {
//   this.setState({ filter });
// }

render() {
  const {calories} = this.state;


  return (
    <div className='wrapper'>
      <MainMenu />
      <CakeBuilder />
      <Footer calories = {calories}/>
      <IngredientsPicker />
    </div>
  );
}
}


export default App;
