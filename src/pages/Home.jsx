import Banner from "../Components/Banner";
import FeaturedEventSec from "../Components/FeaturedEventSec";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Section1 from "../Components/Section1";
import Team from "../Components/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <Section1 />
      <Gallery />
      <FeaturedEventSec />
      <Team />
      <Footer/>
    </div>
  );
};
export default Home;
