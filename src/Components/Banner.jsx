import WaveAnimation from "./Wave";
import tech from "../tech.json";
import Lottie from "lottie-react";

const Banner = () => {
    return (
      <div className="bg-blue-700 w-full pt-30">
        <div className="text-white px-6 max-w-7xl mx-auto">
          <div className="sm:flex justify-between items-center">
            <div>
              <h3 className="md:text-5xl text-2xl font-primary font-[500]">
                CPI
              </h3>
              <h2 className="text-5xl font-bold md:text-9xl">IT CLUB</h2>
              <p className="text-xl md:text-2xl">Bright Future Loading...</p>
            </div>
            <div>
              <Lottie
                animationData={tech}
                className="md:w-[350px] w-[200px]  mx-auto my-5"
                loop={true}
              />
            </div>
          </div>
        </div>
        <WaveAnimation />
      </div>
    );
}
export default Banner;