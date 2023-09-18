import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  singleProductReducer,
  productReducer,
  userProductReducer,
  newProductReducer,
  bidReducer,
  commentReducer,
} from "./redux/reducers/productReducer";

import {
  allUsersReducer,
  FavoriteReducer,
  NotificationReducer,
  userDetailsReducer,
  //   allUsersReducer,
  //   forgotPasswordReducer,
  //   profileReducer,
  //   userDetailsReducer,
  userReducer,
} from "./redux/reducers/userReducer";
import {
  recyclerReducer,
  singleRecyclerReducer,
} from "./redux/reducers/recyclerReducer";
import {
  orderReducer,
  recycleOrderReducer,
  userOrderReducer,
} from "./redux/reducers/orderReducer";
import { organizationReducer } from "./redux/reducers/organizationReducer";

const reducer = combineReducers({
  //   products: productsReducer,
  //   productDetails: productDetailsReducer,
  user: userReducer,
  favorites: FavoriteReducer,
  notifications: NotificationReducer,
  //   profile: profileReducer,
  //   forgotPassword: forgotPasswordReducer,
  //   cart: cartReducer,
  //   newOrder: newOrderReducer,
  //   myOrders: myOrdersReducer,
  //   orderDetails: orderDetailsReducer,
  //   newReview: newReviewReducer,
  products: productReducer,
  newProduct: newProductReducer,
  product: singleProductReducer,
  userProducts: userProductReducer,
  bids: bidReducer,
  comments: commentReducer,
  users: allUsersReducer,
  //   product: productReducer,
  //   allOrders: allOrdersReducer,
  //   order: orderReducer,
  //   allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  //   productReviews: productReviewsReducer,
  //   review: reviewReducer,
  recyclers: recyclerReducer,
  recycler: singleRecyclerReducer,
  orders: recycleOrderReducer,

  organization: organizationReducer,

  order: orderReducer,
  userOrders: userOrderReducer,
});

let initialState = {
  //   cart: {
  //     cartItems: localStorage.getItem("cartItems")
  //       ? JSON.parse(localStorage.getItem("cartItems"))
  //       : [],
  //     shippingInfo: localStorage.getItem("shippingInfo")
  //       ? JSON.parse(localStorage.getItem("shippingInfo"))
  //       : {},
  //   },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
