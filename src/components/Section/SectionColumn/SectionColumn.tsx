import "./sectionColumn.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const SectionColumn = ({ children }: Props) => {
  return <div className="section-container-column">{children}</div>;
};

export default SectionColumn;
