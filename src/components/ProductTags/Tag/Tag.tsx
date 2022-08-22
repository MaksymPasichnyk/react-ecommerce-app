import "./tag.scss";

type Props = {
	title: string
}

const Tag = ({ title }: Props) => {
	return (
		<h6 className="tag">
			{title}
		</h6>
	)
}

export default Tag