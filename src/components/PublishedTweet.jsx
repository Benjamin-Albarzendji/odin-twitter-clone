import { useState, useEffect } from 'react';
import {
  UserCircleIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  ChartBarIcon,
  ArrowUpOnSquareIcon,
} from '@heroicons/react/24/outline';

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
    <div className="publishedTwet flex max-h-[250px] min-h-[120px] w-[100%] cursor-pointer flex-col justify-between border-b-[0.5px] pr-4 pt-4 pl-4 pb-1 hover:bg-slate-100">
      {/* // The tweet body */}
      <div className="TweetBody flex ">
        {/* // The profile picture */}
        <div className="profilePictureBody w-[48px] flex-shrink-0">
          <div>{profilePicture}</div>
        </div>
        {/* // The tweet content body*/}
        <div className="contentBody ml-3 w-[100%]">
          {/* // The top of the tweet */}
          <div className="Top flex items-center  text-xs">
            {' '}
            {/* // The username */}
            {props.tweet.displayName ? (
              <div className="items-center text-sm font-bold">
                {props.tweet.displayName}
              </div>
            ) : (
              <div className="items-center text-sm font-bold">Anonymous</div>
            )}
            {/* // The timestamp */}
            <div className="ml-3 text-xs">{timestamp}</div>
          </div>
          {/* // The tweet content */}
          <div className="w-[470px] items-center text-justify text-xs sm:text-base">
            {props.tweet.content}
          </div>
        </div>
      </div>

      {/* The Bottom of the */}
      <div className="mt-3 ml-[40px] flex h-[30px] w-[520px] items-center justify-between p-4 ">
        {/* Chat icon */}
        <div className="group flex items-center gap-2 rounded-full p-2 hover:bg-blue-100">
          <ChatBubbleOvalLeftIcon className="h-[20px] group-hover:stroke-blue-600"></ChatBubbleOvalLeftIcon>
          <div>0</div>
        </div>

        {/* Arrow Icon */}
        <div className="group flex items-center gap-2 justify-self-start rounded-full p-2 hover:bg-green-100">
          <ArrowPathRoundedSquareIcon className="h-[20px] group-hover:stroke-green-600"></ArrowPathRoundedSquareIcon>
          <div>0</div>
        </div>

        {/* Heart Icon */}
        <div className="group flex items-center gap-2 rounded-full p-2 hover:bg-red-100">
          <HeartIcon className="h-[20px] group-hover:stroke-red-600"></HeartIcon>
          <div>0</div>
        </div>

        {/* Chartbar Icon */}
        <div className="group flex items-center gap-2 rounded-full p-2 hover:bg-blue-100">
          <ChartBarIcon className="h-[20px] group-hover:stroke-blue-600"></ChartBarIcon>
          <div>0</div>
        </div>

        {/* Share Icon */}
        <div className="group rounded-full p-2 hover:bg-blue-100">
          <ArrowUpOnSquareIcon className="h-[20px] group-hover:stroke-blue-600"></ArrowUpOnSquareIcon>
        </div>
      </div>
    </div>
  );
};

export default PublishedTweet;
