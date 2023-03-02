import { useState, useEffect } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const PublishedTweet = (props) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [timestamp, setTimeStamp] = useState(null);

  // Setting the profile picture & timestamp
  useEffect(() => {
    setTimeout(() => {
      try {
        // Sets the timestamp
        setTimeStamp(
          new Date(props.tweet.timestamp).toLocaleString([], {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        );
        // If there is no profile picture, throw a false error
        if (props.tweet.profilePicture !== undefined) {
          setProfilePicture(
            <img
              src={props.tweet.profilePicture}
              className=" rounded-full xl:h-[42px] xl:w-[42px]"
              alt="User Profile Picture"
            />
          );
        } else {
          throw false;
        }
      } catch {
        // The Catch error sets an anon profile picture
        setProfilePicture(<UserCircleIcon className="h-[42px] w-[42px]" />);
      }
    }, 500);
  }, [props.user]);

  return (
    // Published Tweet container
    <div className="publishedTwet h-[150px] w-[100%] cursor-pointer border-b-[0.5px] p-4 hover:bg-slate-100">
      {/* // The tweet body */}
      <div className="TweetBody flex ">
        {/* // The profile picture */}
        <div className="profilePictureBody h-[200px] w-[48px] flex-shrink-0">
          <div>{profilePicture}</div>
        </div>
        {/* // The tweet content body*/}
        <div className="contentBody ml-3 w-[100%]">
          {/* // The top of the tweet */}
          <div className="Top flex items-center justify-between text-xs">
            {' '}
            {/* // The username */}
            {props.tweet.displayName ? (
              <div className="items-center font-bold">
                {props.tweet.displayName}
              </div>
            ) : (
              <div className="items-center font-bold">Anonymous</div>
            )}
            {/* // The timestamp */}
            <div>{timestamp}</div>
          </div>
          {/* // The tweet content */}
          <div className="items-center text-xs sm:text-base">
            {props.tweet.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishedTweet;
