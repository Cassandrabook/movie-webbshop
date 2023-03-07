import { useOutletContext } from "react-router-dom"
import { MyContext } from "../../App"
import { CartItem } from "../../models/cartitem";

export const Cart = () => {
    const { cart } = useOutletContext<MyContext>();

    let saveToLs = localStorage.setItem("movies", JSON.stringify(cart));

        console.log(saveToLs);
    
    let getFromLs = localStorage.getItem("movies");

    return(
        <>
            {cart.map((cartItem) => {
                return <h4>{cartItem.product.name}</h4>
            })}
        </>
    );
}