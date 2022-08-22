import "./sectionRow.scss";

type Props = {
	children: JSX.Element|JSX.Element[],
}

const SectionRow = ({ children }: Props) => {
	return (
		<div className="section-row">
			{children}
		</div>
	)
}

export default SectionRow