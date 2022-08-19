import Button from "../Button/Button";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="banner__header">
          <h6 className="banner__subtitle">Banner subfocus</h6>
          <h3 className="banner__title">Space for heading</h3>
        </div>
        <Button
					text="Read recepies" 
					type="right" 
					styleName={["outlined", "medium", "filled"]} />
      </div>
    </div>
  );
};

export default Banner;
