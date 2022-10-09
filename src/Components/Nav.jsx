import logo from "../assets/reactjs-icon.png"
import '../App.css'

function Nav () {
  return (
      <nav className='nav-container'>
        <img src={logo} alt='logo' className='img'/>
        <h3 className='title' >ReactFacts</h3>
        <h4 className='subtitle'>React Course - Project 1</h4>
      </nav>
    )
}

export default Nav