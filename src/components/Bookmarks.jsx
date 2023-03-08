const Bookmarks = (props) => {
  return (
    // Bookmarks container
    <div className="Bookmarks flex h-[100vh] overflow-hidden">
      <div className="Bookmarks w-[100vw] border-r-[0.5px] md:w-[600px] ">
        {/* Bookmarks Title */}
        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          Bookmarks
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
