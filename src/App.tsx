import React, { useEffect, useState } from "react";
import "./App.scss";
import { Nav } from "./components/Nav/Nav";
import { CartItem } from "./models/cartitem";
import { IProductSmall } from "./models/IProductSmall";
import { Outlet } from "react-router-dom";
import { getFromLs, saveToLs } from "./services/saveToLs";

export type MyContext = {
  addProductToCart(p: IProductSmall): void;
  cart: CartItem[];
};

function App() {
  const [cart, setCart] = useState<CartItem[]>(getFromLs());

  useEffect(() => {
    saveToLs(cart);
  }, [cart]);

  const addProductToCart = (product: IProductSmall) => {
    setCart([...cart, new CartItem(product, 1)]);
  };

  return (
    <>
      <header>
        <Nav cart={cart}></Nav>
      </header>
      <main>
        <Outlet context={{ addProductToCart, cart }}></Outlet>
      </main>
    </>
  );
}

export default App;
