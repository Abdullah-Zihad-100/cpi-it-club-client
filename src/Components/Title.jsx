const Title = ({ heading, title }) => {
  return (
    <div className="py-5">
      <h2 className="text-blue-700 text-2xl sm:text-4xl font-semibold text-center mb-1">
        {heading}
      </h2>
      <p className="text-gray-800 text-lg text-center">{title} </p>
      <hr className="border-b-2 mt-4 border-blue-500 lg:w-2/6 w-2/4 mx-auto" />
    </div>
  );
};
export default Title;
