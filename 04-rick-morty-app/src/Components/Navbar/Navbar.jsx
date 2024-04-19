import './navbar.css'
import logo from '../../assets/react.svg'

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar__link' href='/'> RICK AND MORTY APP</a>
        <div className='navbar__container-fluid'>
          <img className='navbar__logo' src={logo} alt='logo__react' />
        </div>
      </nav>
    </>
  )
}

export default Navbar
