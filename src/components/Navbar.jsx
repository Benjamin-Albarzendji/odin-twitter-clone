import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  BookmarkIcon,
  ListBulletIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import twittIcon from '../assets/twitter-logo.svg.png';

const Navbar = () => {
  return (
    <div className="Navbar flex w-[30%] flex-col items-start gap-2 border-r-[0.5px] p-4">
      <div className="w-a ml-[50%] flex gap-4 p-3 text-xl">
        <img src={twittIcon} className="TwitIcon h-6" alt="" />
      </div>

      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        <HomeIcon className="h-6 text-black" /> <div className="">Home</div>
      </div>

      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        <HashtagIcon className="h-6 text-black" /> Explore
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        {' '}
        <BellIcon className="h-6 text-black" />
        Notifications
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300">
        {' '}
        <EnvelopeIcon className="h-6 text-black" />
        Messages
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        <BookmarkIcon className="h-6 text-black" />
        Bookmarks
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        <ListBulletIcon className="h-6 text-black" />
        Lists
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        <UserIcon className="h-6 text-black" />
        Profile
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        <EllipsisHorizontalCircleIcon className="h-6 text-black" />
        More
      </div>
      <div className="w-a ml-[50%] flex cursor-pointer gap-4 p-3 text-xl font-medium hover:rounded-full hover:bg-slate-500">
        Tweet
      </div>
    </div>
  );
};

export default Navbar;
