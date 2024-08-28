import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='container'>

<img src={logo} alt="" className='logo'/>
<ul>
    <Link to="/Edubridge-github
">
        <li>Home</li>
    </Link>
    <li>ABOUT US</li>
    <Link to="/Edubridge-github/services" >
         <li>SERVICES</li>
    </Link>
    <Link to="/Edubridge-github
/study-abroad">
        <li>STUDY ABROAD</li>
    </Link>
    <li>EVENTS</li>
    <li>SOCIAL ENTERPRISE</li>
    <li><button className='btn'>CONTACT US</button></li>
</ul>
     </nav>
  )
}

export default Navbar
