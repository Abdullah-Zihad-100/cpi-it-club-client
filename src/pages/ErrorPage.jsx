import Lottie from "lottie-react";
import error from "../Error.json";

const ErrorPage = () => {
    return (
      <div>
        <Lottie
          animationData={error}
          className="w-full h-screen mx-auto"
          loop={true}
        />
      </div>
    );
}
export default ErrorPage;