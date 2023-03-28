import { CartItem } from "../models/cartitem";

export const saveToLs = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getFromLs = () => {
  let cartFromLs = localStorage.getItem("cart");
  if (cartFromLs) {
    return JSON.parse(cartFromLs || "");
  } else {
    return [];
  }
};
