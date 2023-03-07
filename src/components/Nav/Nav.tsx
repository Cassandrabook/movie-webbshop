import { Link } from "react-router-dom";
import { CartItem } from "../../models/cartitem";
import { CartSmall } from "../CartSmall/CartSmall";
import { FaShoppingBasket } from 'react-icons/fa';
import './nav.scss';

interface INavProps{
    cart: CartItem[];
}

export const Nav = (props: INavProps) => {

    return(
        <nav className="navbar">
            
            <ul className="navbar__ul">
                <li className="navbar__logo">Movies.se</li>
                <li className="navbar__li">
                    <Link to="/" className="navbar__navigation">Home</Link>
                    <Link to="/products" className="navbar__navigation">Movies</Link>
                    <Link to="/cart" className="navbar__navigation"><FaShoppingBasket className="icon"/><CartSmall cart={props.cart}></CartSmall></Link>
                </li>    
            </ul>
        </nav>
    );
};