import Filter from "../components/Filter/Filter";
import Layout from "../components/Layout/Layout";
import Breadcrumbs from "../components/Navigations/Breadcrumbs/Breadcurmbs";
import Heading from "../components/Navigations/Heading/Heading";
import Pagination from "../components/Pagination/Pagination";
import ProductCardList from "../components/ProductCardList/ProductCardList";

const Category = () => {
  return (
    <div className="category">
      <Breadcrumbs />
      <Heading title="Fruit and vegetables" />
      <div style={{
			paddingTop: "64px",
			paddingBottom: "64px"
		}} className="row">
        <div className="column">
          <Filter />
        </div>
        <div className="column">
          <ProductCardList elems={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />
        </div>
      </div>
			<Pagination />
    </div>
  );
};

export default Category;
