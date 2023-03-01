import { useState, useEffect } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const PublishedTweet = (props) => {
  console.log(props, 'hmm?');
  const [profilePicture, setProfilePicture] = useState(null);

  // Setting the profile picture
  useEffect(() => {
    setTimeout(() => {
      try {
        setProfilePicture(
          <img
            src={props.user.photoURL}
            className=" rounded-full xl:h-[42px] xl:w-[42px]"
            alt="User Profile Picture"
          />
        );
      } catch {
        setProfilePicture(<UserCircleIcon className="h-[42px] w-[42px]" />);
      }
    }, 500);
  }, [props.user]);

  return (
    <div className="publishedTwet h-[200px] w-[100%] border-b-[0.5px] p-4">
      <div className="TweetBody ">
        <div className="profilePictureBody h-[200px] w-[48px]">
          <div>{profilePicture}</div>
          <div>{props.tweet.content}</div>
        </div>
      </div>
    </div>
  );
};

export default PublishedTweet;
