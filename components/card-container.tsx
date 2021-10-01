const CardContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-around max-w-4xl mt-6 mb-20 sm:w-full items-stretch">
      {children}
    </div>
  );
};

export default CardContainer;
