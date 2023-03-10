import { useState, useLayoutEffect, useEffect } from 'react';
import PublishedTweet from './PublishedTweet';
import ProfileContainer from './ProfileContainer';

const Profile = (props) => {
  // The published tweets container
  const [publishedTweets, setPublishedTweets] = useState(null);
  const [filteredTweets, setFilteredTweets] = useState(null);
  const [render, setRender] = useState(false);
  const [displayName, setDisplayName] = useState(null);

  // Filter the tweets
  useLayoutEffect(() => {
    if (props.tweets !== null) {
      const filteredTweetsTemp = props.tweets.filter((tweets) => {
        return tweets.userID === props.user.uid;
      });
      setFilteredTweets(filteredTweetsTemp);
    }
  }, [props.tweets]);

  // The useeffect to populate the published tweets container
  useEffect(() => {
    if (filteredTweets !== null) {
      setRender(true);
      let publishedTweetsArray = filteredTweets.map((tweet) => (
        <PublishedTweet key={tweet.timestamp} tweet={tweet}>
          {tweet.content}
        </PublishedTweet>
      ));
      setPublishedTweets(publishedTweetsArray);
    }
  }, [filteredTweets]);

  // Useeffect to set the display name
  useEffect(() => {
    if (props.user !== null) {
      setDisplayName(props.user.displayName);
    }
  }, [props.user]);

  return (
    // Profile container
    <div className="Profile flex h-[100vh] overflow-hidden">
      <div className="Profile w-[100vw] border-r-[0.5px] md:w-[600px] ">
        {/* Profile Title */}
        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          {displayName}
        </div>
        <ProfileContainer user={props.user} />
        {/* The published tweets container */}
        <div className="publishedTweets container h-[100vh] overflow-auto pb-[250px]">
          {/* Decides whether to render published tweets  */}
          {render ? publishedTweets : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
