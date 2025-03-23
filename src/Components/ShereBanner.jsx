import WaveAnimation from "./Wave";

const ShereBanner = ({title}) => {
  return (
    <div className="bg-blue-700 w-full pt-30">-
      <div className="text-white px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold md:text-8xl">{title}</h2>
      </div>
      <WaveAnimation />
    </div>
  );
};
export default ShereBanner;
