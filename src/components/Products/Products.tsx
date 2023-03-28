import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { MyContext } from "../../App";
import { IProductSmall } from "../../models/IProductSmall";
import { getProducts } from "../../services/ProductService";
import { Product } from "../Product/Product";
import "./products.scss";

export const Products = () => {
  const [products, setProducts] = useState<IProductSmall[]>([]);
  const { addProductToCart } = useOutletContext<MyContext>();

  useEffect(() => {
    const getData = async () => {
      let products = await getProducts();
      setProducts(products);
    };

    if (products.length > 0) return;
    getData();
  });

  let productsHtml = products.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        addToCart={addProductToCart}
      ></Product>
    );
  });

  return (
    <div className="products-contaier">
      <div className="products">{productsHtml}</div>
    </div>
  );
};
