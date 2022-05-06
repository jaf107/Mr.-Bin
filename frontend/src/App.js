import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Dashboard from "./components/Admin/Dashboard";
import UserAccount from "./components/User/UserAccount";
import Donate from "./components/Donation/Donate";
import Recycle from "./components/Recycling/Recycle";
import Marketplace from "./components/Marketplace/Marketplace";
import ProductForm from "./components/Marketplace/Product/ProductForm";
import MyProducts from "./components/Marketplace/UserProduct/MyProducts";
// import ProductForm from "./components/Marketplace/ProductForm/ProductForm";
import About from "./components/About/About";
import store from "./store";
import { loadUser } from "./actions/userActions";
import { useEffect } from "react";
import ProductDetails from "./components/Marketplace/ProductDetails";
import AddProduct from "./components/Marketplace/Product/AddProduct";
import EnhancedTable from "./components/Marketplace/UserProduct/EnhancedTable";
import UpdateProfile from "./components/User/UpdateProfile";


function App() {
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return (
    <div className="App">
      {/* <Header/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/donate" element={<Donate/>}></Route>
          <Route path="/recycle" element={<Recycle/>}></Route>
          <Route
            path="/admin/dashboard"
            exact
            element={
              <ProtectedRoute isAdmin={true}>
                <Dashboard></Dashboard>
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/account" exact element={<UserAccount></UserAccount>}></Route>
          <Route path="/marketplace" exact element={<Marketplace/>} ></Route>
          <Route path="/addproduct" exact element={<AddProduct/>}></Route>
          <Route path="/about" exact element={<About/>}></Route>
          <Route path="/product/:id" exact element={<ProductDetails/>}></Route>
          <Route path="/me/products" exact element={<MyProducts/>} ></Route>
          <Route path="/me/data-table" exact element={<EnhancedTable/>} ></Route>
          <Route path="/profile/update" exact element={<UpdateProfile/>} ></Route>
          


        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
      <Outlet></Outlet>

    </div>
  );
}

export default App;
