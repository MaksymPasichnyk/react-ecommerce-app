import AppliedFilters from "../AppliedFilters/AppliedFilters"

const FilterBar = () => {
	return (
		<div className="filter-bar">
			<form className="filter-bar-form">
				<fieldset className="filter-bar-fomr__group">
					<input type="radio" value="filter-popular" />
					<input type="radio" value="filter-popular" />
				</fieldset>
			</form>
			<AppliedFilters />
		</div>
	)
}

export default FilterBar