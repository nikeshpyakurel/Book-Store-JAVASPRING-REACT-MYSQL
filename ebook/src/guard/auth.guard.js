import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children, roles }) => {
  const loginUser = useSelector(state => state.user);

  const authorize = () => {
    // if (!loginUser) {
    //   return <Navigate to='/login' />;
    // }

    // if (roles.includes("admin") && loginUser.role.role !== 101) {
    //   return <Navigate to='/admin' />;
    // }

    // if (roles.includes("user") && loginUser.role.role !== 102) {
    //   return <Navigate to='/login' />;
    // }

    return children;
  }

  return authorize();
}
