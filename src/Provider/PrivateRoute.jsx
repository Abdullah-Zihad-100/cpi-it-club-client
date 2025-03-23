import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loader from "../Components/Loader";

const PrivetRoute = ({children}) => {
    const {user,loading}=useAuth();
    const location=useLocation();
    console.log(location?.pathname)

    if(user){
        return children;
    }
    if(!loading){
return <Loader/>
    }

    return <Navigate to={"/login"} state={{from:location}} replace></Navigate>
}
export default PrivetRoute;