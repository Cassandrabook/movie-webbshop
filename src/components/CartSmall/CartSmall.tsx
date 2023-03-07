import { useState } from "react";
import { CartItem } from "../../models/cartitem";
import "./cartsmall.scss"

interface ICartSmallProps{
    cart: CartItem[];
}

export const CartSmall = (props: ICartSmallProps) => {

    let saveCartLs = localStorage.setItem("cart", JSON.stringify(props.cart));
    let getFromLs = localStorage.getItem("cart");

        console.log(saveCartLs);
    return(
        <>
            ({props.cart.length})
        </>
    );
}