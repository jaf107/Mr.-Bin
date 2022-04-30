import { useState } from "react";
import { useRef } from "react";
function RecycleForm(props) {
  const ref = useRef();

  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    props.handleToggle(true);
  };
  return (
    <div className="">
      <form action="">
        <div className="form-group mb-4">
          <select
            id="product_categorie"
            name="category"
            className="form-control"
          >
            <option value="" disabled selected>
              Select Recycler
            </option>
            <option>Books</option>
            <option>Newspapers</option>
            <option>Clothes</option>
            <option>Plastic</option>
            <option>Glassware</option>
            <option>Electronics</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <input
            id="date_of_purchase"
            name="date_of_purchase"
            ref={ref}
            placeholder="Enter Expected Date of Pickup"
            onFocus={() => (ref.current.type = "date")}
            onBlur={() => (ref.current.type = "text")}
            className="form-control"
            required=""
            type="text"
          />
        </div>
        <div className=" ">
                <button
                  type="submit"
                  className="btn btn-success border-0  fw-normal"
                >
                  {" "}
                  Submit Order
                </button>
              </div>
      </form>
    </div>
  );
}

export default RecycleForm;
