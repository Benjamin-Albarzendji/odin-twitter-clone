import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="Home w-[100%] border-r-[0.5px] sm:w-[600px]">
      <div className="searchBar ">
        <div className="group mt-1 ml-5 flex h-[44px] w-[490px] cursor-text flex-row-reverse items-center rounded-full bg-slate-100 p-2 focus-within:border-[1px] focus-within:border-sky-500 focus-within:bg-white focus-within:text-black">
          <input
            type="text"
            className="  peer ml-5 w-[97%] border-2 border-none bg-slate-100 placeholder-slate-700 hover:border-none focus:bg-white focus:text-black  focus:outline-none"
            placeholder="Search Twitter"
          />
          <MagnifyingGlassIcon className="focus- peer-focus:text-sky-500 ml-3 h-[20px] w-[20px] text-slate-500" />
        </div>
      </div>
      <div className="title">Trends for you</div>
    </div>
  );
};

export default Home;
