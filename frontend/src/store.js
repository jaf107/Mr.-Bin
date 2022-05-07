import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  singleProductReducer,
  productReducer,
  userProductReducer,
  newProductReducer,
} from "./reducers/productReducer";

import {
  FavoriteReducer,
  //   allUsersReducer,
  //   forgotPasswordReducer,
  //   profileReducer,
  //   userDetailsReducer,
  userReducer,
} from "./reducers/userReducer";
import {
  recyclerReducer,
  singleRecyclerReducer,
} from "./reducers/recyclerReducer";
import { orderReducer, userOrderReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  //   products: productsReducer,
  //   productDetails: productDetailsReducer,
  user: userReducer,
  favorites:FavoriteReducer,
  
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

  //   product: productReducer,
  //   allOrders: allOrdersReducer,
  //   order: orderReducer,
  //   allUsers: allUsersReducer,
  //   userDetails: userDetailsReducer,
  //   productReviews: productReviewsReducer,
  //   review: reviewReducer,
  recyclers: recyclerReducer,
  recycler: singleRecyclerReducer,
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
