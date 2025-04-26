import { Link } from "react-router";

const FunSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 max-w-7xl mx-auto">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold drop-shadow-md">
          🎮 Ready for Some Fun?
        </h2>
        <p className="text-lg opacity-90">
          Take a break and enjoy a quick game to refresh your mind!
        </p>
        <Link
          to="/play-game"
          className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-100 transition-all duration-300 shadow-lg"
        >
          Play Game
        </Link>
      </div>
    </section>
  );
};

export default FunSection;
