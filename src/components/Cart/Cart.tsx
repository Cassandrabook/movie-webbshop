import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../App";
import { imageError } from "../Product/Product";
import { IoTrashOutline } from "react-icons/io5";
import "./cart.scss";
import { CartItem } from "../../models/cartitem";

export const Cart = () => {
  const { cart } = useOutletContext<MyContext>();

  const removeCartItem = () => {};

  let cartHtml = cart.map((cartItem) => {
    return (
      <div key={cartItem.product.id} className="cart__container__cartItem">
        <img
          className="cart__container__cartItem__img"
          src={cartItem.product.imageUrl}
          alt={cartItem.product.name}
          onError={imageError}
        />
        <h4 className="cart__container__cartItem__movieName">
          {cartItem.product.name}
        </h4>
        <p className="cart__container__cartItem__moviePrice">
          {cartItem.product.price} kr
        </p>
        <div
          onClick={removeCartItem}
          className="cart__container__cartItem__delete"
        >
          <IoTrashOutline />
        </div>
      </div>
    );
  });

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__container__headline">
          <h3 className="cart__container__headline__shop">Produkt</h3>
          <h3 className="cart__container__headline__name">Namn</h3>
          <h3 className="cart__container__headline__price">Pris</h3>
          <h3 className="cart__container__headline__remove">Ta bort</h3>
        </div>
        {cartHtml}
      </div>
      <button>Gå till betalning</button>
    </div>
  );
};
