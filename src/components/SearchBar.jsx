import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <div className="SearchBar  w-[100%] border-r-[0.5px] sm:w-[600px]">
      <div className="searchBar ">
        <div className="group mt-1 ml-5 flex h-[22px] w-[80%] cursor-text flex-row-reverse items-center rounded-full bg-slate-100 p-2 focus-within:border-[1px] focus-within:border-sky-500 focus-within:bg-white focus-within:text-black sm:h-[44px] md:w-[490px]">
          <input
            onInput={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="peer ml-5 w-[97%] border-2 border-none bg-slate-100 placeholder-slate-700 hover:border-none focus:bg-white focus:text-black  focus:outline-none"
            placeholder="Search Twitter"
          />
          <MagnifyingGlassIcon className="focus- ml-3 h-[20px] w-[20px] text-slate-500 peer-focus:text-sky-500" />
          <XCircleIcon
            onClick={() => setInput('')}
            className="right-06 absolute hidden w-[20px] cursor-pointer fill-sky-500 text-white hover:fill-sky-600 peer-focus:block sm:w-[34px]"
          ></XCircleIcon>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
