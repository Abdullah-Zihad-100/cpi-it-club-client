import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
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