import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Register from './Register';
import Tweet from './Tweet';
import PublishedTweet from './PublishedTweet';

const Home = (props) => {
  console.log(props.tweets);

  return (
    <div className="Home flex">
      <div className="Home w-[100vw] border-r-[0.5px] sm:w-[600px]">
        <SearchBar></SearchBar>

        <div className="title ml-5 mt-5 mb-2 text-xl font-bold">Home</div>
        {/* <div>{props.tweets[0].content}</div> */}
        <Tweet user={props.user}></Tweet>
        <PublishedTweet></PublishedTweet>
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
