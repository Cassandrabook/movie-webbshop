import { useNavigate } from "react-router-dom";
import { IProductSmall } from "../../models/IProductSmall";
import "./product.scss";
import errorImage from "./../../assets/No-Image-Placeholder.svg.png";

interface IProductProps {
  product: IProductSmall;
  addToCart(p: IProductSmall): void;
}

export function imageError(e: any) {
  e.currentTarget.src = errorImage;
}

export const Product = (props: IProductProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.addToCart(props.product);
  };

  const showMoreClick = () => {
    navigate(`/product/${props.product.id}`);
  };

  return (
    <>
      <div className="product">
        <div className="product__image-container">
          <img
            src={props.product.imageUrl}
            alt={props.product.name}
            onError={imageError}
          />
        </div>
        <h4 className="product__title">{props.product.name}</h4>
        <p className="product__price">{props.product.price} kr</p>
        <div className="product__btn-container">
          <button onClick={handleClick} className="product__btn-add">
            Lägg i varukorg
          </button>
          <button onClick={showMoreClick} className="product__btn-more">
            Läs mer
          </button>
        </div>
      </div>
    </>
  );
};
