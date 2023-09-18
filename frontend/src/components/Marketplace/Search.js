import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/actions/productActions";

export default function Search() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/marketplace/${keyword}`);
  };
  return (
    <div>
      <div class="input-group mt-3">
        <div class="form-outline">
          <input
            type="search"
            id="form1"
            name="keyword"
            value={keyword}
            class="form-control"
            placeholder="Search a Product"
            onChange={onKeywordChange}
          />
        </div>
        <button type="button" class="btn btn-primary" onClick={onSearch}>
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}
