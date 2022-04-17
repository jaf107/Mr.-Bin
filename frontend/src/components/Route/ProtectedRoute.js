import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const {isAuthenticated} = useSelector((state) => state.user);
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }
//   if (isAdmin === true && user.role !== "admin") {
//     return <Navigate to="/login" />;
//   }

  return children;
//   return (
//         <Fragment>
    
//           render={(props) => {
          

          
//           }}
//         </Fragment>
//   );
};

export default ProtectedRoute;