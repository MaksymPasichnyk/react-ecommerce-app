import "./productCardList.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductCardList = () => {
  return (
    <div className="products">
      <ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
    </div>
  );
};

export default ProductCardList;
