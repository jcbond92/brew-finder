const CardContainer = ({ children }) => {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-20 sm:w-full">
      {children}
    </div>
  );
};

export default CardContainer;
