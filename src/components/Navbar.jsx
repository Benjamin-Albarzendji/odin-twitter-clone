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
import User from './User';
import { NavLink } from 'react-router-dom';

const LoggedIn = (props) => {
  let activeStyle = { fontWeight: 'bold' };
  return (
    // Navbar Container
    <div className="Navbar relative hidden h-[100vh]  w-[21%] flex-col items-end gap-2 border-r-[0.5px] p-4 md:flex lg:w-[22%] xl:w-[31%] xl:items-start">
      {/* // Twitter Icon */}
      <div className="flex w-[60px] gap-4 p-3 text-xl sm:ml-[50%] ">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <img src={twittIcon} className="TwitIcon h-7 cursor-pointer" alt="" />
          {/* // Home Icon */}
        </NavLink>
      </div>
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <NavLink
          className="flex gap-4"
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <HomeIcon className="w-7 text-black sm:w-7 " />{' '}
          <div className="hidden xl:block">Home</div>
        </NavLink>
      </div>
      {/* // Explore Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <NavLink
          className="flex gap-4"
          to="/explore"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <HashtagIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block"> Explore</div>
        </NavLink>
      </div>
      {/* Notifications Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        {' '}
        <NavLink
          className="flex gap-4"
          to="/notifications"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <BellIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Notifications</div>
        </NavLink>
      </div>
      {/* Messages Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        {' '}
        <NavLink
          className="flex gap-4"
          to="/messages"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <EnvelopeIcon className="w-7 text-black sm:w-7" />
          <div className="hidden xl:block">Messages</div>
        </NavLink>
      </div>
      {/* Bookmarks Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300 xl:ml-[50%]  ">
        <NavLink
          className="flex gap-4"
          to="/bookmarks"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <BookmarkIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Bookmarks</div>
        </NavLink>
      </div>
      {/* Lists Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <NavLink
          className="flex gap-4"
          to="/lists"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <ListBulletIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Lists</div>
        </NavLink>
      </div>
      {/* Profile Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%] ">
        <NavLink
          className="flex gap-4"
          to={'/' + props.user.uid}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <UserIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Profile</div>
        </NavLink>
      </div>
      {/* More Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <NavLink
          className="flex gap-4"
          to="/more"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <EllipsisHorizontalCircleIcon className="f w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">More</div>
        </NavLink>
      </div>

      {/* Tweet Button */}
      <div className="text-l flex h-[52px] w-[52px] cursor-pointer justify-center gap-4 rounded-full bg-[#1D9BF0] p-3 text-xl font-bold text-white transition-all hover:rounded-full hover:bg-blue-400 xl:ml-[50%]  xl:h-[52px] xl:w-[45%] xl:p-3">
        <div className="hidden xl:block">Tweet</div>{' '}
        <div className="flex items-center justify-center xl:hidden">+</div>
      </div>
      {/* User Icon */}

      <User
        user={props.user}
        setUser={props.setUser}
        setLogin={props.setLogin}
      ></User>
    </div>
  );
};

const NotLoggedIn = () => {
  return (
    //  Navbar Container
    <div className="Navbar hidden h-[100vh]  w-[21%] flex-col items-end gap-2 border-r-[0.5px] p-4 sm:flex lg:w-[22%] xl:w-[31%] xl:items-start">
      {/* Twitter Icon */}
      <div className="flex w-[60px] gap-4 p-3 text-xl sm:ml-[50%]">
        <img src={twittIcon} className="TwitIcon h-7 " alt="" />
      </div>

      {/* Explore Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-bold transition-all hover:rounded-full hover:bg-slate-300  xl:ml-[50%]  ">
        <HashtagIcon className="w-7 text-black sm:w-7" />{' '}
        <div className="hidden xl:block"> Explore</div>
      </div>
    </div>
  );
};

const Navbar = (props) => {
  if (props.login === true) {
    return (
      <LoggedIn
        user={props.user}
        setUser={props.setUser}
        setLogin={props.setLogin}
      ></LoggedIn>
    );
  } else {
    return <NotLoggedIn></NotLoggedIn>;
  }
};

export default Navbar;
