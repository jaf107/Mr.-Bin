import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../../actions/orderActions';

const RecycleOrder = () => {
    const dispatch = useDispatch();
    const { recycleOrders } = useSelector((state) => state.recycleOrders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    const recycleOrderList = recycleOrders?.map((recycleOrder, index) => {
        // console.log(recycleOrder);
        <OrderDetails order={recycleOrder} index={index} ></OrderDetails>
        
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
                        {recycleOrderList}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecycleOrder;

function OrderDetails(props) {
    console.log(props);
    return (
        <tr>
            <td>{props.index} </td>
            <td>{props.order.product} </td>
            <td>{props.order.user} </td>
            <td>{props.order.recycler} </td>
            <td>{props.order.address} </td>
            <td>{props.order.pickupDate}</td>
            <td>{props.order.status} </td>
        </tr>
    )
}
