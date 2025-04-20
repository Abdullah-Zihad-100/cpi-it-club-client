import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import useAxiosInterceptor from "../Hooks/useAxiosInterceptor";


const MainLayout = () => {
  useAxiosInterceptor();
  return (
    <div className="font-primary">
        <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;