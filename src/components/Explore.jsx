import SearchBar from './SearchBar';

const Explore = (props) => {
  return (
    // Explore container
    <div className="Explore flex h-[100vh] overflow-hidden">
      <div className="Explore w-[100vw] border-r-[0.5px] md:w-[600px] ">
        {/* Search Bar */}
        <SearchBar></SearchBar>

        {/* Explore Title */}
        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          Trends for you
        </div>
      </div>
    </div>
  );
};

export default Explore;
