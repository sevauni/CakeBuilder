import './Footer.css'
import Button from 'react-bootstrap/Button';


const Footer = ({calories}) => {
  
  return (
    <footer className='footer'>

      <div className='calorie-bage'>
        Calories: {calories}
      </div>
      <Button className='submit-button' variant="secondary" active>
        Order Cake
      </Button>{' '}
    </footer>
  );
}

export default Footer;
