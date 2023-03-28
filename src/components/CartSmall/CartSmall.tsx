import { CartItem } from "../../models/cartitem";
import "./cartsmall.scss";

interface ICartSmallProps {
  cart: CartItem[];
}

export const CartSmall = (props: ICartSmallProps) => {
  return <>({props.cart.length})</>;
};
