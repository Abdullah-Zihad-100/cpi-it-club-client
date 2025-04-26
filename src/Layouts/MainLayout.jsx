import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import useAxiosInterceptor from "../Hooks/useAxiosInterceptor";
import Footer from "../Components/Footer";


const MainLayout = () => {

  const location = useLocation();

  const hiddenFooterRoute=["/profile","/assignment","/profile/edit","/play-game"]
const shouldHideFooter = hiddenFooterRoute.some((path) =>
  location.pathname.startsWith(path)
);
  useAxiosInterceptor();
  return (
    <div className="font-primary">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}
export default MainLayout;