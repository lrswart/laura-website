import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

//const navBarLinks = [{ url: "/home", title: "Home"}]

const NavBar = ({ navBarLinks }) => {

   const [menuClicked, setMenuClicked] = useState(false);

   const toggleMenuClick = () => {
      setMenuClicked(!menuClicked);
   };

   return (  
   <nav className="navbar">
      <span className="navbar-logo">Laura Swart</span>
      { menuClicked ? (<FiMenu size={25} className="navbar-menu" onClick={ toggleMenuClick } />) : 
         (<FiX size={25} className="navbar-menu" onClick={ toggleMenuClick } />)
      }
      <ul className= { menuClicked ? "navbar-list" : "navbar-list navbar-list--active" }> 
         {navBarLinks.map((item) => {
            return (<li className="navbar-item" key={ item.title }>
               <a className="navbar-link" href={ item.url }>
                  { item.title }
               </a>
            </li>);
         })}
      </ul>
   </nav>
   );
}
 
export default NavBar;