import Lottie from "lottie-react";
import loader from "../loader.json";

export default function Loader() {
  return (
    <div>
         <Lottie
                animationData={loader}
                className="w-[250px] mx-auto flex justify-center items-center h-screen"
                loop={true}
              />
    </div>
  )
}
