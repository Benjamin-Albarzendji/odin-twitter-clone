import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const Tweet = (props) => {
  const [input, setInput] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  

  //Setting the profile picture
  useEffect(() => {
    setTimeout(() => {
      //The profile picture
      if (props.user.photoURL === null) {
        setProfilePicture(<UserCircleIcon className="h-10 w-10" />);
      } else {
        setProfilePicture(
          <img
            src={props.user.photoURL}
            className=" rounded-full xl:h-10 xl:w-10"
            alt="User Profile Picture"
          />
        );
      }
    }, 500);
  }, [props.user]);

  return (
    <div className="Tweet  h-[181px] w-[100%] bg-blue-200 sm:w-[600px] p-3">
      <div className="Tweet flex">
        <div className="profile bg- h-[181px] w-[48px]">
          <div>{profilePicture}</div>
        </div>
        <div className="group mt-1 ml-5 flex h-[22px] w-[80%] cursor-text flex-row-reverse items-center rounded-full bg-slate-100 p-2 focus-within:border-[1px] focus-within:border-sky-500 focus-within:bg-white focus-within:text-black sm:h-[44px] md:w-[490px]">
          <input
            onInput={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="peer ml-5 w-[97%] border-2 border-none bg-slate-100 placeholder-slate-700 hover:border-none focus:bg-white focus:text-black  focus:outline-none"
            placeholder="Search Twitter"
          />
          <MagnifyingGlassIcon className="focus- ml-3 h-[20px] w-[20px] text-slate-500 peer-focus:text-sky-500" />
          <XCircleIcon
            onClick={() => setInput('')}
            className="right-06 absolute hidden w-[20px] cursor-pointer fill-sky-500 text-white hover:fill-sky-600 peer-focus:block sm:w-[34px]"
          ></XCircleIcon>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
