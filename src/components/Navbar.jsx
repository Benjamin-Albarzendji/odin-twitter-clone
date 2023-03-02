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
      <NavLink
        className="sm: ml-[50%]"
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="flex w-[60px] gap-4 p-3 text-xl  ">
          <img src={twittIcon} className="TwitIcon h-7 cursor-pointer" alt="" />
        </div>
      </NavLink>

      {/* // Home Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300 ">
          <HomeIcon className="w-7 text-black sm:w-7 " />{' '}
          <div className="hidden xl:block">Home</div>
        </div>
      </NavLink>

      {/* // Explore Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/explore"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300    ">
          <HashtagIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block"> Explore</div>
        </div>
      </NavLink>

      {/* Notifications Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/notifications"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300   ">
          {' '}
          <BellIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Notifications</div>
        </div>
      </NavLink>

      {/* Messages Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/messages"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300   ">
          {' '}
          <EnvelopeIcon className="w-7 text-black sm:w-7" />
          <div className="hidden xl:block">Messages</div>
        </div>
      </NavLink>

      {/* Bookmarks Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/bookmarks"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  ">
          <BookmarkIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Bookmarks</div>
        </div>
      </NavLink>

      {/* Lists Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/lists"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300   ">
          <ListBulletIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Lists</div>
        </div>
      </NavLink>

      {/* Profile Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to={'/' + props.user.uid}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300  ">
          <UserIcon className="w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">Profile</div>
        </div>
      </NavLink>

      {/* More Icon */}
      <NavLink
        className="flex gap-4 xl:ml-[50%]"
        to="/more"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-normal transition-all hover:rounded-full hover:bg-slate-300   ">
          <EllipsisHorizontalCircleIcon className="f w-7 text-black sm:w-7" />{' '}
          <div className="hidden xl:block">More</div>
        </div>
      </NavLink>

      {/* Tweet Button */}
      <div className="text-l flex h-[52px] w-[52px] cursor-pointer justify-center gap-4 rounded-full bg-[#1D9BF0] p-3 text-xl font-bold text-white transition-all hover:rounded-full hover:bg-blue-400  xl:ml-[50%] xl:h-[52px] xl:w-[45%] xl:p-3">
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
      <div className="flex w-[60px] gap-4 p-3 text-xl sm:ml-[50%] xl:ml-[50%]">
        <img src={twittIcon} className="TwitIcon h-7 " alt="" />
      </div>

      {/* Explore Icon */}
      <div className="w-a flex cursor-pointer gap-4 p-3 text-xl font-bold transition-all hover:rounded-full hover:bg-slate-300   ">
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
