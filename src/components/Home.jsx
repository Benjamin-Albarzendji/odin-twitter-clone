import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import SearchBar from './SearchBar';
import Register from './Register';
import Tweet from './Tweet';

const Home = (props) => {
  return (
    <div className="Home flex">
      <div className="Home w-[100vw] border-r-[0.5px] sm:w-[600px]">
        <SearchBar></SearchBar>

        <div className="title ml-5 mt-5 text-2xl font-bold">
          Trends for you
          <div className="text-sm">Disabled</div>
        </div>

        <Tweet user={props.user}></Tweet>
      </div>
      <Register
        setLogin={props.setLogin}
        login={props.login}
        setUser={props.setUser}
        className
      ></Register>
    </div>
  );
};

export default Home;
