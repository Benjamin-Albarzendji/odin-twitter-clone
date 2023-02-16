import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Register from './register';

const Home = (props) => {
  const [input, setInput] = useState('');

  return (
    <div className="Home flex">
      <div className="Home w-[100vw] border-r-[0.5px] sm:w-[600px]">
        <SearchBar></SearchBar>

        <div className="title ml-5 mt-5 text-2xl font-bold">
          Trends for you
          <div className="text-sm">Disabled</div>
        </div>
      </div>
      <Register setLogin={props.setLogin} login={props.login} className></Register>
    </div>
  );
};

export default Home;
