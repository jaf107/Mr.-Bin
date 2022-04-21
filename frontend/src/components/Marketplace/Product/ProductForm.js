import React, { useState } from 'react'
import Header from '../../Header/Header'
import { useDispatch, useSelector } from "react-redux";
import Footer from '../../Footer/Footer';
import { addProduct } from '../../../actions/productActions';

const ProductForm = () => {
    const dispatch = useDispatch();

    const [product, setProduct] = useState({
        name: "",
        category: "",
        quantity: "",
        condition: "",
        description: "",
        date_of_purchase: new Date(),
        purchase_price: "",
    })

    const productSubmit = (e) => {
        e.preventDefault();

        const productForm = FormData();
        productForm.set("name", name);
        productForm.set("category", category);
        productForm.set("quantity", quantity);
        productForm.set("condition", condition);
        productForm.set("date_of_purchase", date_of_purchase);
        productForm.set("purchase_price", purchase_price);


     dispatch(addProduct(productForm));
    }

    const registerDataChange = (e) => {
        
        setProduct({ ...product, [e.target.name]: e.target.value });
        
      };

    const { name, category, quantity, condition, description, date_of_purchase, purchase_price } = product;

    return (
        <div>
            <Header />
            <div className='container productform'>

                <form className="form-horizontal" onSubmit={productSubmit}>
                    <fieldset>

                        <h2>Product Form</h2>
                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="product_name">
                                PRODUCT NAME
                            </label>
                            <div className="col-md-4">
                                <input
                                    id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required="" type="text"
                                    value={name}
                                    onChange={registerDataChange}

                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="product_categorie"
                            >
                                PRODUCT CATEGORY
                            </label>
                            <div className="col-md-4">
                                <select
                                    id="product_categorie" name="product_categorie" className="form-control"
                                >
                                    <option value="book">BOOKS</option>
                                    <option value="newspaper">NEWSPAPERr</option>
                                    <option value="clothes">CLOTHES</option>
                                    <option value="plastic">PLASTIC</option>
                                    <option value="glasswares">GLASSWARES</option>

                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="quantity"
                            >
                                QUANTITY
                            </label>
                            <div className="col-md-4">
                                <input
                                    id="quantity" name="quantity" placeholder="AVAILABLE QUANTITY" className="form-control input-md" required="" type="text"
                                    value={quantity}
                                    onChange={registerDataChange}
                                />

                            </div>
                        </div>

                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="product_description"
                            >
                                PRODUCT DESCRIPTION
                            </label>
                            <div className="col-md-4">
                                <textarea
                                    className="form-control" id="product_description" name="product_description"
                                    value={description}
                                    onChange={registerDataChange}
                                >

                                </textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="product_condition"
                            >
                                PRODUCT CONDITION
                            </label>
                            <div className="col-md-4">
                                <input
                                    id="product_condition" name="product_condition" placeholder="PRODUCT CONDITION" className="form-control input-md" required="" type="text"
                                    value={condition}
                                    onChange={registerDataChange}
                                />

                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="purchase_price"
                            >
                                PURCHASE PRICE
                            </label>
                            <div className="col-md-4">
                                <input
                                    id="purchase_price" name="purchase_price" placeholder="PURCHASE PRICE" className="form-control input-md" required="" type="text"
                                    value={purchase_price}
                                    onChange={registerDataChange}
                                />

                            </div>
                        </div>


                        <div className="form-group">
                            <label
                                className="col-md-4 control-label" for="date_of_purchase"
                            >
                                DATE OF PURCHASE
                            </label>
                            <div className="col-md-4">
                                <input
                                    id="date_of_purchase" name="date_of_purchase" placeholder="ONLINE DATE" className="form-control input-md" required="" type="date"
                                    value={date_of_purchase}
                                    onChange={registerDataChange}
                                />

                            </div>
                        </div>

                        <button className='btn btn-success'> Add Product</button>

                    </fieldset>
                </form>


            </div>
            <Footer/>
        </div>
    )
}

export default ProductForm