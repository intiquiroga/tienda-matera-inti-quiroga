import Button from 'react-bootstrap/Button';
import "./Navbar.css";
import { CartWidget } from '../componenteCartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom"; 
export const Navbar = () => {

    return (
         <nav style={{backgroundColor:"black",display:"flex",justifyContent:"space-between"}}>
            <Link to="/inicio">Inicio</Link>
            {/* Nuevos Links */}
            <NavLink to="/MATES"> MATES </NavLink>
            <NavLink to="/TERMOS">TERMOS</NavLink>
            <NavLink to="/QUIENESSOMOS">QUIENES SOMOS</NavLink>
            <NavLink to="/CONTACTO">CONTACTO</NavLink>
            {/* Nuevos Links */}
             <img className='imagenlogo' src="https://th.bing.com/th/id/OIP.0pWty1ATaKrYjEx7Xwpt-wAAAA?pid=ImgDet&rs=1" alt="Logo de Pagina"/>
             <ul style={{display:"flex",columnGap:"20px",justifyContent:"flex-end",color:"white",listStyle:"none",fontFamily:"fantasy",marginRight:"10px"}}>
                 <li><a href="" style={{color:"yellow"}}> MATES </a></li>
                 <li><a href="" style={{color:"yellow"}}> TERMOS </a></li>
                 <li><a href="" style={{color:"yellow"}}> QUIENES SOMOS </a></li>
                 <li><a href="" style={{color:"yellow"}}> CONTACTO </a></li>
             </ul>
             <CartWidget></CartWidget>
         </nav>
    )
}