import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";
import useRole from "../Hooks/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const {role,isLoading} = useRole();
  const location = useLocation();
  console.log(location?.pathname);

  if (user && role === "admin") {
    return children;
  }
  if (!loading || isLoading) {
    return <Loader />;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};
export default AdminRoute;
