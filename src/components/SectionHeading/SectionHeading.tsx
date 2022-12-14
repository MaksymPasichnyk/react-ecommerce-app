import Button from "../Button/Button";
import "./sectionHeading.scss";

type Props = {
	title: string,
	btnTitle: string,
}

const SectionHeading = ({ title, btnTitle }: Props) => {
  return (
    <div className="heading-bar">
      <h4 className="heading-bar__title">{title}</h4>
			<Button text={btnTitle} type="right" styleName={["small", "simple"]} />
    </div>
  );
};

export default SectionHeading