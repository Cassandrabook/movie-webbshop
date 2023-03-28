import { Link } from "react-router-dom";
import { CartItem } from "../../models/cartitem";
import { CartSmall } from "../CartSmall/CartSmall";
import { FaShoppingBasket } from "react-icons/fa";
import { Squash as Hamburger } from "hamburger-react";
import "./nav.scss";
import { useState } from "react";

interface INavProps {
  cart: CartItem[];
}

export const Nav = (props: INavProps) => {
  const [isOpen, setOpen] = useState(Boolean);
  const onClick = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div onClick={onClick}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={20}
          direction="left"
          duration={0.4}
          distance="lg"
          color="#fff"
          easing="ease-in"
          onToggle={(toggled: any) => {
            if (toggled) {
              setOpen(true);
            } else {
              setOpen(false);
            }
          }}
          rounded
          label="Show menu"
          hideOutline={false}
        ></Hamburger>
      </div>

      <div className="container">
        <p className="container__logo">Movies.se</p>
        <nav className={isOpen ? "navActive" : "navbar"}>
          <ul className="navbar__ul">
            <li className="navbar__li">
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/"
                className="navbar__navigation"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/products"
                className="navbar__navigation"
              >
                Movies
              </Link>
              <Link
                onClick={() => {
                  setOpen(false);
                }}
                to="/cart"
                className="navbar__navigation"
              >
                <FaShoppingBasket className="icon" />
                <CartSmall cart={props.cart}></CartSmall>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
