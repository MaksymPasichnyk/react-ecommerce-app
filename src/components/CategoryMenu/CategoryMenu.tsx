import Button from "../Button/Button";
import "./categoryMenu.scss";

const CategoryMenu = () => {
  return (
    <div className="category-menu">
      <h4 className="category-menu__title">Category Headline</h4>
      <ul className="category-menu__list">
        <li className="category-menu__item">
          <a className="link">Category item</a>
        </li >
        <li className="category-menu__item">
          <a className="link">Category item</a>
        </li>
        <li className="category-menu__item">
          <a className="link">Category item</a>
        </li>
        <li className="category-menu__item">
          <a className="link">Category item</a>
        </li>
        <li className="category-menu__item">
          <a className="link">Category item</a>
        </li>
      </ul>
			<Button text="Button" type="right" styleName={['small', 'bright']} />
    </div>
  );
};

export default CategoryMenu;
