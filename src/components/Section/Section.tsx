import "./section.scss";

type Props = {
	children: JSX.Element|JSX.Element[],
}

const Section = ({ children }: Props) => {
	return (
		<section className="section-container">
			{children}
		</section>
	)
}

export default Section