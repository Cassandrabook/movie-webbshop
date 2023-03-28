import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { MyContext } from "../../App";
import { IProduct } from "../../models/IProduct";
import { IProductSmall } from "../../models/IProductSmall";
import { getProductById } from "../../services/ProductService";
import { imageError } from "../Product/Product";
import "./productDetail.scss";

export const ProductDetails = () => {
  const [product, setProduct] = useState<IProduct>();
  const [error, setError] = useState("");
  const { addProductToCart } = useOutletContext<MyContext>();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        let response = await getProductById(+id);

        if (response.product) {
          setProduct(response.product);
        } else {
          setError(response.error);
        }
      }
    };

    if (product) return;
    getData();
  });

  const addToCart = () => {
    addProductToCart(product as IProductSmall);
  };

  return (
    <>
      {error !== "" ? (
        <>
          <h2>{error}</h2>
        </>
      ) : (
        <>
          <section className="movieProduct">
            <div className="movieProduct__container">
              <img
                className="movieProduct__container__img"
                src={product?.imageUrl}
                alt={product?.name}
                onError={imageError}
              />
              <div className="movieProduct__container__content">
                <h2 className="movieProduct__container__content__name slide-in">
                  {product?.name}
                </h2>
                <p className="movieProduct__container__content__year slide-in">
                  Utgivningsår: {product?.year}
                </p>
                <p className="movieProduct__container__content__desc slide-in">
                  {product?.description}
                </p>
                <p className="movieProduct__container__content__price slide-in">
                  Pris: {product?.price} kr
                </p>
                <button
                  className="movieProduct__container__content__button slide-in"
                  onClick={addToCart}
                >
                  Lägg i varukorgen
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};
