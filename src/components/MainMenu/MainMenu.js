import './MainMenu.css';
import Logo from '../../img/icon.svg';
import GitHubButton from 'react-github-btn'

const MainMenu = () => {
  return (
    <nav className='mainmenu'>


      <img src={Logo} alt="Logo" />
      <h1>The Little Bakery</h1>
      <div className='github-btn-menu'>
        <GitHubButton href="https://github.com/sevauni"
          data-size="large"
          aria-label="Follow @sevauni on GitHub"
        >Follow @sevauni</GitHubButton>
      </div>


    </nav>
  );
}

export default MainMenu;
