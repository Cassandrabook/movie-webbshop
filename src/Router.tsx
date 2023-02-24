import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Cart } from "./components/Cart/Cart";
import { ProductDetails } from "./components/ProductDetailed/ProductDetails";
import { Products } from "./components/Products/Products";
import { Startpage } from "./components/Starpage/Startpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Startpage />
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);