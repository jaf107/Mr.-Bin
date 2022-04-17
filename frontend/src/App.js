import Login from "./components/User/Login";
import Register from "./components/User/Register";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Dashboard from "./components/Admin/Dashboard";
import UserAccount from "./components/User/UserAccount";
import Marketplace from "./components/Marketplace/Marketplace";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
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

        </Routes>
      </BrowserRouter>
      <Outlet></Outlet>

    </div>
  );
}

export default App;
