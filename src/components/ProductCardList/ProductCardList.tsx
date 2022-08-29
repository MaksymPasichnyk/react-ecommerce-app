import "./productCardList.scss";
import ProductCard from "../ProductCard/ProductCard";

interface Props {
	elems: number[],
}

const ProductCardList = ({elems}: Props) => {
  return (
    <div className="products">
			{elems.map(elem => {
				return <ProductCard key={elem} />
			})}
    </div>
  );
};

export default ProductCardList;
