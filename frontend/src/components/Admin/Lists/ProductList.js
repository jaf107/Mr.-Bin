import React, { useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, getProducts } from '../../../actions/productActions';
import { getAllUsers } from '../../../actions/userActions';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { users } = useSelector((state) => state.allUsers);


    useEffect(() => {
        dispatch(getProducts());
        dispatch(getAllUsers());
    }, [dispatch]);


    const productList = products?.map((product, index) => (
        <ProductDetails product={product} users={users} index={index}></ProductDetails>
    ));
    return (
        <div>
            <div className='container'>
                <h2>All Products</h2>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">User</th>

                            <th scope="col">Price</th>
                            <th scope="col">Date</th>
                            {/* <th scope="col">Edit</th> */}
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList}

                        {/* 
                        {products.map((product, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {product.name}
                                </td>
                                <td>{users.find(o => o._id === product.user).name} </td>

                                <td>{product.purchase_price} </td>
                                <td>{product.created_at} </td>
                                <td>
                                    <button
                                        className='btn btn-danger '
                                        onClick={() => {
                                            onDeleteProduct();
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList;

function ProductDetails(props) {
    const dispatch = useDispatch();
    const alert = useAlert();
    const onDeleteProduct = () => {
        dispatch(deleteProduct(props.product._id));
        alert.success("PRODUCT DELETED SUCCESSFULLY");
    };
    return (
        <tr>
            {
                <>
                    <td>{props.index + 1}</td>
                    <td
                        style={{
                            textAlign: "center",
                        }}
                    >

                        <Link
                            to={`/product/${props.product._id}`}
                            className=" text-decoration-none fw-bold"
                        >
                            {props.product.name}

                        </Link>{" "}
                    </td>
                    <td>{props.users.find(o => o._id === props.product.user).name} </td>

                    <td>{props.product.purchase_price} </td>
                    <td>{props.product.created_at} </td>

                    <td>
                        <button
                            className="btn btn-danger "
                            onClick={() => {
                                onDeleteProduct();
                            }}
                        >
                            Delete
                        </button>
                    </td>
                </>
            }
        </tr>
    );
}