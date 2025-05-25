import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import useAxiosInterceptor from "../Hooks/useAxiosInterceptor";
import Footer from "../Components/Footer";
import CookieCheckModal from "../Components/CookiesCheckModal";
import ScrollToTop from "../Components/ScrollToTop";


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
      <ScrollToTop />
      <div className="">
        <CookieCheckModal />
        <Outlet />
      </div>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}
export default MainLayout;