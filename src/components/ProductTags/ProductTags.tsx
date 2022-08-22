import Tag from "./Tag/Tag";
import { nanoid } from "nanoid";
import "./productTags.scss";

const tags = [
  "Beans",
  "Carrots",
  "Apples",
  "Garlic",
  "Mushroms",
  "Tomatoes",
  "Chilli peppers",
  "Broccoli",
  "Watermelons",
  "Oranges",
];

const ProductTags = () => {
  return (
    <div className="product-tags">
			<h4>Product tags</h4>
      {tags.map((tag) => {
        return <Tag title={tag} key={nanoid()} />;
      })}
    </div>
  );
};

export default ProductTags;
