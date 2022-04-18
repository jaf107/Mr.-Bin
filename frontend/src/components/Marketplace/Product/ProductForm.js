import React from 'react'
import Header from '../../Header/Header'

const ProductForm = () => {
    return (
        <div>
            <Header />
            <div className='container productform'>

                <form className="form-horizontal">
                    <fieldset>

                        {/* <!-- Form Name --> */}
                        {/* <legend>PRODUCTS</legend> */}

                        <h2>Product Form</h2>

                        {/* <!-- Text input--> */}

                        {/* <div className="form-group">
                            <label className="col-md-4 control-label" for="product_id">PRODUCT ID</label>
                            <div className="col-md-4">
                                <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control input-md" required="" type="text" />
                            </div>
                        </div> */}

                        {/* <!-- Text input--> */}
                        <div className="form-group">
                            <label className="col-md-4 control-label" for="product_name">PRODUCT NAME</label>
                            <div className ="col-md-4">
                                <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className ="form-control input-md" required="" type="text" />
                            </div>
                        </div>

                        {/* <!-- Text input--> */}


                        {/* <!-- Select Basic --> */}
                        <div className ="form-group">
                            <label className ="col-md-4 control-label" for="product_categorie">PRODUCT CATEGORY</label>
                            <div className ="col-md-4">
                                <select
                                    id="product_categorie" name="product_categorie" className ="form-control"
                                >
                                      <option value="book">BOOKS</option>
                                      <option value="newspaper">NEWSPAPERr</option>
                                      <option value="clothes">CLOTHES</option>


                                      <option value="plastic">PLASTIC</option>
                                      <option value="glasswares">GLASSWARES</option>

                                </select>
                            </div>
                        </div>

                        {/* <!-- Text input--> */}
                        <div className ="form-group">
                            <label className ="col-md-4 control-label" for="quantity"> QUANTITY</label>
                            <div className ="col-md-4">
                                <input id="quantity" name="quantity" placeholder="AVAILABLE QUANTITY" className ="form-control input-md" required="" type="text" />

                            </div>
                        </div>


                        {/* <!-- Textarea --> */}
                        <div className ="form-group">
                            <label className ="col-md-4 control-label" for="product_description">PRODUCT DESCRIPTION</label>
                            <div className ="col-md-4">
                                <textarea className ="form-control" id="product_description" name="product_description"></textarea>
                            </div>
                        </div>



                        {/* <!-- Text input--> */}
                        <div className ="form-group">
                            <label className ="col-md-4 control-label" for="product_condition">PRODUCT CONDITION</label>
                            <div className ="col-md-4">
                                <input id="product_condition" name="product_condition" placeholder="PRODUCT CONDITION" className ="form-control input-md" required="" type="text" />

                            </div>
                        </div>
                        <div className ="form-group">
                            <label className ="col-md-4 control-label" for="purchase_price">PURCHASE PRICE</label>
                            <div className ="col-md-4">
                                <input id="purchase_price" name="purchase_price" placeholder="PURCHASE PRICE" className ="form-control input-md" required="" type="text" />

                            </div>
                        </div>

                        {/* <!-- Text input--> */}
                        <div className ="form-group">
                            <label className ="col-md-4 control-label" for="date_of_purchase">DATE OF PURCHASE</label>
                            <div className ="col-md-4">
                                <input id="date_of_purchase" name="date_of_purchase" placeholder="ONLINE DATE" className ="form-control input-md" required="" type="date" />

                            </div>
                        </div>

                        <button className='btn btn-success'> Add Product</button>

                        {/* <!-- Text input--> */}
                        {/* <div class="form-group">
                            <label class="col-md-4 control-label" for="approuved_by">APPROUVED BY</label>
                            <div class="col-md-4">
                                <input id="approuved_by" name="approuved_by" placeholder="APPROUVED BY" class="form-control input-md" required="" type="text" />

                                <div class="form-group">
                                    <label class="col-md-4 control-label" for="filebutton">main_image</label>
                                    <div class="col-md-4">
                                        <input id="filebutton" name="filebutton" class="input-file" type="file" />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="col-md-4 control-label" for="filebutton">auxiliary_images</label>
                                    <div class="col-md-4">
                                        <input id="filebutton" name="filebutton" class="input-file" type="file" />
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-md-4 control-label" for="singlebutton">Single Button</label>
                                    <div class="col-md-4">
                                        <button id="singlebutton" name="singlebutton" class="btn btn-primary">Button</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </fieldset>
                </form>


            </div>

        </div>
    )
}

export default ProductForm