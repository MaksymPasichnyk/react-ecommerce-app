type Props = {
	styleName: string,
	children: JSX.Element,
}

const Form = ({ styleName, children }:Props) => {
	return (
		<form className={`form ${styleName}`}>
			{children}
		</form>
	)
}

export default Form