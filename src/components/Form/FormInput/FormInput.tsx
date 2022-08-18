type Props = {
	placeholderText: string,
}

const FormInput = ({placeholderText}: Props) => {
	return (
		<input className="form-input" placeholder={placeholderText} />
	)
}

export default FormInput