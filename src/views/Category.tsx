import Filter from "../components/Filter/Filter"
import Layout from "../components/Layout/Layout"
import Breadcrumbs from "../components/Navigations/Breadcrumbs/Breadcurmbs"
import Heading from "../components/Navigations/Heading/Heading"

const Category = () => {
	return (
		<div className="category">
			<Breadcrumbs />
			<Heading title="Fruit and vegetables" />
			<Filter />
		</div>
	)
}

export default Category