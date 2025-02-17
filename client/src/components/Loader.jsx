const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full gap-2 animate-pulse min-h-[80vh]">
      <div className="">
        <div className="flex gap-2 justify-center">
          <div className="bg-black w-2 h-2 animate-spin"></div>
          <div className="bg-black w-2 h-2 animate-spin"></div>
          <div className="bg-black w-2 h-2 animate-spin"></div>
        </div>
        <p className="pt-2">Loading</p>
      </div>
    </div>
  );
};

export default Loader;
