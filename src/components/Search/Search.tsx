import Form from "../Form/Form";
import FormSelect from "../Form/FormSelect/FormSelect";
import FormInput from "../Form/FormInput/FormInput";

import { AiOutlineSearch } from "react-icons/ai";
import "./search.scss";

const Search = () => {
  return (
    <div className="search">
      <Form styleName={"search__form"}>
        <>
          <FormSelect />
          <span className="vertical-devider"></span>
          <FormInput placeholderText="Search products, categories ..." />
          <i className="icon">
            <AiOutlineSearch />
          </i>
        </>
      </Form>
    </div>
  );
};

export default Search;
