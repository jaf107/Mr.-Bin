import React, { useEffect } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../actions/orderActions';

const RecycleOrder = () => {
    const dispatch = useDispatch();
    const { recycleOrders } = useSelector((state) => state.recycleOrders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    console.log(recycleOrders)
    const orderList = recycleOrders?.map((recycleOrder, index) => {
        <OrderDetails recycleOrder={recycleOrder} index={index} ></OrderDetails>
    })

    return (
        <div>
            <div className='container'>
                <h2>All Orders</h2>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">User</th>
                            <th scope="col">Recycler</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* {recycleOrderList} */}


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecycleOrder;

function OrderDetails(props) {
    const dispatch = useDispatch();
    const alert = useAlert();

    return (
        <tr>
            {
                <>
                    <td></td>
                </>
            }
        </tr>
    )
}