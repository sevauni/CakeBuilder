import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Component } from 'react';



import './IngredientsPicker.css'


class IngredientsPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crustState: 'regularBiscuit',
      thicknessState: '1',
    }

    this.crustSwitchButton = [
      { name: 'regularBiscuit', label: 'Regular' },
      { name: 'honeyBiscuit', label: 'Honey' },
      { name: 'peanutBiscuit', label: 'Peanut' },
    ];

    this.thicknessSwitchButton = [
      { name: '1', label: 'Thin' },
      { name: '2', label: 'Medium' },
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
      <Button variant="primary"
       size="lg"
       onClick={e =>{this.props.onAdd(this.state.crustState,this.state.thicknessState,300,100)}}>
        Add a new layer
      </Button>
      <br />
    </div>
    );
  }

}

export default IngredientsPicker;
