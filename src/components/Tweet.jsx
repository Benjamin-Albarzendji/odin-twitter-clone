import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Tweet = (props) => {
  const [input, setInput] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [characterCount, setCharacterCount] = useState(0);
  const [showCharacterCount, setShowCharacterCount] = useState('hidden');

  // Check input length
  const inputChecker = (e) => {
    if (e.target.value.length > 280) return;
    setInput(e.target.value);
    setCharacterCount(e.target.value.length);

    if (e.target.value.length > 0) {
      setShowCharacterCount('xl:block absolute bottom-2 left-4 text-xs');
    } else {
      setShowCharacterCount('hidden');
    }
  };

  //Setting the profile picture
  useEffect(() => {
    setTimeout(() => {
      //The profile picture
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
    <div className="Tweet relative h-[108px] w-[100%]  border-b-[0.5px] border-t-[0.5px] p-4 sm:w-[600px]">
      <div className="Tweet flex">
        <div className="profile h-[181px] w-[48px]">
          <div>{profilePicture}</div>
        </div>
        <div className="flex h-[44px] w-[80%] cursor-text flex-row-reverse items-center  p-2 focus-within:text-black  md:w-[490px]">
          <input
            onInput={(e) => inputChecker(e)}
            value={input}
            type="text"
            className="bg-back peer mr-10 flex w-[90%] flex-wrap border-2 border-none placeholder-slate-700 hover:border-none focus:text-black  focus:outline-none"
            placeholder="What's Happening?"
          />
          <XCircleIcon
            onMouseDown={() => {
              setInput('');
              setShowCharacterCount('hidden');
            }}
            className="right-06 absolute hidden w-[20px] cursor-pointer fill-sky-500 text-white hover:fill-sky-600 peer-focus:block sm:w-[34px]"
          ></XCircleIcon>
        </div>
      </div>

      <div className="tweetButton absolute right-2 bottom-2">
        <div
          className=" flex  h-[32px] w-[78] cursor-pointer items-center justify-center gap-4 rounded-full bg-[#1D9BF0] p-4 text-sm font-bold text-white transition-all hover:rounded-full  hover:bg-blue-400 
         "
        >
          <div className=" xl:block">Tweet</div>{' '}
        </div>
      </div>

      <div className={showCharacterCount}>{characterCount} / 280</div>
    </div>
  );
};

export default Tweet;
