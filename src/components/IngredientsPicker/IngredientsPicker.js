import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


import './IngredientsPicker.css'


class IngredientsPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crustState: "regularBiscuit",
      thicknessState: 0,
      color: 'red'
    }

    this.crustSwitchButton = [
      { name: 'regularBiscuit', label: 'Regular' },
      { name: 'honeyBiscuit', label: 'Honey' },
      { name: 'peanutBiscuit ', label: 'Peanut' },
      { name: 'mousseBiscuit ', label: 'Mousse' }
    ];

    this.thicknessSwitchButton = [
      { name: 'thick1', label: 'Thin' },
      { name: 'thick2', label: 'Medium' },
      { name: 'thick3 ', label: 'Thick' },
    ];


    this.colorSwitchButton = [
      { name: 'red', label: 'Red' },
      { name: 'orange', label: 'Orange' },
      { name: 'yellow', label: 'Yellow' },
      { name: 'brown', label: 'Brown' },
      { name: 'blue', label: 'Blue' },
      { name: 'green', label: 'Green' },
    ];

  }


  onUpdateCrust = (e) => {
    const crustState = e.target.value;
    this.setState({ crustState: crustState });
  }

  onUpdateThickness = (e) => {
    const thicknessState = e.target.value;
    this.setState({ thicknessState: thicknessState });
  }

  onUpdateColor = (e) => {
    const color = e.target.name;
    this.setState({ color: color });

  }

  render() {
    const buttonsCrust = this.crustSwitchButton.map(({ name, label }, index) => {
      return (
        <ToggleButton
          key={index}
          id={`crust-${index}`}
          type="radio"
          variant='outline-success'
          name="crust"
          value={name}
          checked={name === this.state.crustState}
          onChange={this.onUpdateCrust}
        >
          {label}
        </ToggleButton>
      )
    })
    const buttonsThickness = this.thicknessSwitchButton.map(({ name, label }, index) => {
      return (
        <ToggleButton
          key={index}
          id={`thick-${index}`}
          type="radio"
          variant='outline-success'
          name="thick"
          value={name}
          checked={name === this.state.thicknessState}
          onChange={this.onUpdateThickness}
        >
          {label}
        </ToggleButton>
      )
    })
    const colorPickerOptions = this.colorSwitchButton.map(({ name, label }, index) => {
      return (
        <Dropdown.Item
         id={{ name }}
         key={`color-${index}`}
         name={name}
         onClick={this.onUpdateColor}
        >{label}</Dropdown.Item>
      )
    });
    const colorPicker = (
      <DropdownButton
        id="dropdown-basic-button"
        title="Pick a color"
        drop="start"
        
        style={{
          // backgroundColor: 'red',
        }}
      >
        {colorPickerOptions}
      </DropdownButton>
    )
    const colorPickerWindow = this.state.color;
    console.log(colorPickerWindow);
    return (
    <div className="ingredients-picker" >
      <h5>Biscuits</h5>
      <ButtonGroup className='buttons'>
        {buttonsCrust}
      </ButtonGroup>
      <h5>Thickness</h5>
      <ButtonGroup className='buttons'>
        {buttonsThickness}
      </ButtonGroup>
      <h5>Color</h5>
      <div className='color-buttons'>
        {colorPicker}
        <Button variant="primary"
          style={{
            marginLeft: '2rem',
            color: 'rgba(0, 0, 0, 0)',
            backgroundColor: `${colorPickerWindow}`,
          }}
        >0</Button>
      </div>
      <Button variant="primary" size="lg">
        Add a new layer
      </Button>
      <br />
    </div>
    );
  }

}


export default IngredientsPicker;
