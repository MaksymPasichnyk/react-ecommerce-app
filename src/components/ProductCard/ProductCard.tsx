import "./productCard.scss";
import Button from "../Button/Button";


const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <img />
      </div>
      <div className="product-card__info">
        <h5 className="product-card__title">Product Title</h5>
        <p>Space for a small product description</p>
        <div className="product-card__info-bottom">
          <div className="product-card__price-bl">
            <h4 className="product-card__price">1.48 USD</h4>
						<span className="product-card__old-price">-1 USD</span>
          </div>
					<Button 
						text="Buy now"
						styleName={["small", "filled"]}
					/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
