import './MainMenu.css';
import Logo from '../../img/icon.svg';


const MainMenu = () => {
  return (
    <nav className='mainmenu'>


        <img src={Logo} alt="Logo" />
        <h1>The Little Bakery</h1>

    </nav>
  );
}

export default MainMenu;
