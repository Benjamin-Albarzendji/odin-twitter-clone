import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Register from './Register';
import Tweet from './Tweet';
import PublishedTweet from './PublishedTweet';

const Home = (props) => {
  const [render, setRender] = useState(false);
  const [publishedTweets, setPublishedTweets] = useState(null);
  useEffect(() => {
    if (props.tweets !== null) {
      setRender(true);
      let test = props.tweets.map((tweet) => (
        <PublishedTweet tweet={tweet}>{tweet.content}</PublishedTweet>
      ));
      console.log(test, 'testing');
      setPublishedTweets(test);
    }
  }, [props.tweets]);

  return (
    <div className="Home flex h-[100vh] overflow-hidden">
      <div className="Home w-[100vw] border-r-[0.5px] sm:w-[600px] ">
        <SearchBar></SearchBar>

        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          Home
        </div>
        <Tweet user={props.user}></Tweet>
        <div className="publishedTweets container h-[100vh] overflow-auto">
          {render ? publishedTweets : null}
        </div>
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
