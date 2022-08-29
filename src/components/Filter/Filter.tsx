import "./filter.scss";
import fiveStarsImg from "../../assets/flter-icons/five-stars.png";
import fourStarsImg from "../../assets/flter-icons/four-stars.png";
import threeStarsImg from "../../assets/flter-icons/three-stars.png";
import twoStarsImg from "../../assets/flter-icons/two-stars.png";
import oneStarImg from "../../assets/flter-icons/one-star.png";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";
import Button from "../Button/Button";

const Filter = () => {
  return (
    <div className="filter">
      <form className="filter__form">
        <div className="categories">
          <h4>Categories</h4>
          <ul className="categories__list">
            <li className="categories__item">
              <a className="categories__link">Category name</a>
              <span className="categories__quantity green-bage">320</span>
            </li>
            <li className="categories__item">
              <a className="categories__link">Category name</a>
              <span className="categories__quantity green-bage">120</span>
            </li>
            <li className="categories__item">
              <a className="categories__link">Category name</a>
              <span className="categories__quantity green-bage">20</span>
            </li>
          </ul>
        </div>
        <div className="brands">
          <h4>Brands</h4>
          <ul className="brands__list">
            <li className="brands__item">
              <label className="checkmark-container">
                Filter by brand item
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                Filter by brand item
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                Filter by brand item
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                Filter by brand item
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                Filter by brand item
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        {/* change later to component */}
        <div className="brands">
          <h4>Rating</h4>
          <ul className="brands__list">
            <li className="brands__item">
              <label className="checkmark-container">
                <img src={fiveStarsImg} />
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                <img src={fourStarsImg} />
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                <img src={threeStarsImg} />
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                <img src={twoStarsImg} />
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
            <li className="brands__item">
              <label className="checkmark-container">
                <img src={oneStarImg} />
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>

        <div className="price">
          <h4>Price</h4>
          <MultiRangeSlider
            min={1}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <div className="filter__actions">
          <Button
						text="Apply"
						type="submit"
						styleName={["medium", "outlined", "filled"]}
					/>
					<Button 
						text="Reset"
						type="reset"
						styleName={["medium", "simple"]}
					/>
        </div>
      </form>
    </div>
  );
};

export default Filter;
