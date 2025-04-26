import Banner from "../Components/Banner";
import CouseSection from "../Components/CouseSection";
import FeaturedEventSec from "../Components/FeaturedEventSec";
import Footer from "../Components/Footer";
import FunSection from "../Components/FunSection";
import Gallery from "../Components/Gallery";
import Notice from "../Components/Notice";
import Section1 from "../Components/Section1";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div className="relative w-full h-full">
      <Notice />
      <Banner />
      <Section1 />
      <Gallery />
      <FeaturedEventSec />
      <CouseSection />
      <FunSection />

      <Team />
    </div>
  );
};

export default Home;
