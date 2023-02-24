import { useOutletContext } from "react-router-dom"
import { MyContext } from "../../App"

export const Cart = () => {
    const { cart } = useOutletContext<MyContext>();

    return(
        <>
            {cart.map((cartItem) => {
                return <h4>{cartItem.product.name}</h4>
            })}
        </>
    );
}