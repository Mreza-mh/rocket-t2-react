// import React from "react";
// import { Route, Navigate, useLocation } from "react-router-dom";

// export default function PrRoutes({ component: Component, ...rest }) {
//   const isAuthenticated = () => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     return userData && new Date().getTime() < userData.expirationTime;
//   };

//   const location = useLocation();

//   return (
//     <div>
//       <Route {...rest}>
//         {isAuthenticated() ? (
//           <Component />
//         ) : (
//           <Navigate to="/login" state={{ from: location }} />
//         )}
//       </Route>
//     </div>
//   );
// }
