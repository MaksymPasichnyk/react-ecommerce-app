import Button from "../Button/Button";
import QuantityBadge from "../QuantityBadge/QuantityBadge";
import "./pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="page">
        <h6 className="page__title">Page:</h6>
        <ul className="page__list">
          <li className="page__item">
            <a className="page__link">1</a>
          </li>
          <li className="page__item active">
            <a className="page__link">2</a>
          </li>
          <li className="page__item">
            <a className="page__link">3</a>
          </li>
        </ul>
      </div>
			<Button type="downArrowAfter" text="Show more products" styleName={["large", "filled", "outlined"]} />
			<QuantityBadge title="Products" quantity={112} />
    </div>
  );
};

export default Pagination;
