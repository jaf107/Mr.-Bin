import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../actions/productActions';
import { getAllUsers } from '../../../actions/userActions';

const ProductList = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { users } = useSelector((state) => state.allUsers);


    useEffect(() => {
        dispatch(getProducts());
        dispatch(getAllUsers());
    }, [dispatch]);

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
                        {products.map((product, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>
                                    {product.name}
                                </td>
                                <td>{users.find(o => o._id === product.user).name} </td>

                                <td>{product.purchase_price} </td>
                                <td>{product.created_at} </td>
                                {/* <td><button className='btn btn-warning '> Edit </button> </td> */}
                                <td><button className='btn btn-danger '> Delete </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList;