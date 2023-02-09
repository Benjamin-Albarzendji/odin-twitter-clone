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

const Item = (props) => {
  if (props.test) {
    return <div> YES IT WORKS</div>;
  }
};

const Navbar = (props) => {
  const isLoggedin = true;

  return (
    <div className="Navbar hidden h-[100vh]  w-[21%] flex-col items-end gap-2 border-r-[0.5px] p-4 sm:flex lg:w-[22%] xl:w-[31%] xl:items-start">
      <div className="flex gap-4 p-3 text-xl sm:ml-[50%]">
        <img src={twittIcon} className="TwitIcon h-7 " alt="" />
      </div>

      {/* <Item
        test={true}
        className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  "
      ></Item> */}

      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <HomeIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block">Home</div>
      </div>

      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <HashtagIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block"> Explore</div>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        {' '}
        <BellIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block">Notifications</div>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        {' '}
        <EnvelopeIcon className="w-7 text-black sm:w-7" />
        <div className="hidden xl:block">Messages</div>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300 xl:ml-[50%]  ">
        <BookmarkIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block">Bookmarks</div>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <ListBulletIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block">Lists</div>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <UserIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block">Profile</div>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-medium transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <EllipsisHorizontalCircleIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block">More</div>
      </div>
      <div className="text-l flex h-[52px] w-[52px] cursor-pointer justify-center gap-4 rounded-full bg-[#1D9BF0] p-3 text-xl font-bold text-white transition-all hover:rounded-full hover:bg-blue-400 xl:ml-[50%]  xl:h-[52px] xl:w-[50%] xl:p-3">
        <div className="hidden xl:block">Tweet</div>{' '}
        <div className="flex items-center justify-center xl:hidden">+</div>
      </div>
    </div>
  );
};

export default Navbar;
