import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Register from './Register';
import Tweet from './Tweet';
import PublishedTweet from './PublishedTweet';

const Home = (props) => {
  // Whether to render or not
  const [render, setRender] = useState(false);

  // The published tweets container
  const [publishedTweets, setPublishedTweets] = useState(null);

  // The useeffect to populate the published tweets container
  useEffect(() => {
    if (props.tweets !== null) {
      setRender(true);
      let publishedTweetsArray = props.tweets.map((tweet) => (
        <PublishedTweet key={tweet.timestamp} tweet={tweet}>
          {tweet.content}
        </PublishedTweet>
      ));
      setPublishedTweets(publishedTweetsArray);
    }
  }, [props.tweets]);

  return (
    // Home container
    <div className="Home flex h-[100vh] overflow-hidden">
      <div className="Home w-[100vw] border-r-[0.5px] md:w-[600px] ">
        {/* Search Bar */}
        <SearchBar></SearchBar>

        {/* Home Title */}
        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          Home
        </div>

        {/* Decides whether to render the tweet box depending on login status */}
        {props.login ? <Tweet user={props.user}></Tweet> : null}

        {/* The published tweets container */}
        <div className="publishedTweets container h-[100vh] overflow-auto pb-[250px]">
          {/* Decides wehther to render published tweets  */}
          {render ? publishedTweets : null}
        </div>

        {/* The register side bar if not logged in. */}
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
