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
import About from "./components/About/About";
import store from "./store";
import { loadUser } from "./actions/userActions";
import { useEffect } from "react";


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
          <Route path="/product" exact element={<ProductForm/>}></Route>
          <Route path="/about" exact element={<About/>}></Route>

        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
      <Outlet></Outlet>

    </div>
  );
}

export default App;
