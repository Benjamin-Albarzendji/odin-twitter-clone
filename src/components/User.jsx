import { useState, useEffect } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { OuterClick } from 'react-outer-click';
import { auth } from '../main.jsx';

// User component popup
const UserPopUp = (props) => {
  // Log out function
  const logouter = () => {
    auth.signOut();
    props.setLogin(false);
    props.setUser(null);
  };

  // If the user is logged in and ut is clicked, show the user popup
  if (props.show === true) {
    return (
      <div
        onMouseLeave={() => props.setShowPopUp(false)}
        onMouseDown={logouter}
        className="absolute left-[-15%] top-[-100%] rounded-lg border-[1px] p-3 text-xs font-normal xl:left-[35%]"
      >
        Logout{' '}
      </div>
    );
  }
};

// User component
const User = (props) => {
  const [user, setUser] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  // Setting the user's name and the profile picture
  useEffect(() => {
    // The user name
    if (props.user.displayName === null) {
      setUser('Anonymous');
    } else {
      setUser(props.user.displayName);
    }

    //The profile picture
    if (props.user.photoURL === null) {
      setProfilePicture(<UserCircleIcon className="h-10 w-10" />);
    } else {
      setProfilePicture(
        <img
          src={props.user.photoURL}
          className=" flex-shrink-0 rounded-full xl:h-10 xl:w-10"
          alt="User Profile Picture"
        />
      );
    }
  }, []);

  return (
    // Imported OuterClick from https://www.npmjs.com/package/react-outer-click.
    // Makes the popup disappear when clicked outside.
    <OuterClick
      className="relative ml-[50%] mt-[auto] rounded-full hover:bg-gray-100"
      onOuterClick={() => {
        if (showPopUp === true) {
          setShowPopUp(false);
        }
      }}
    >
      <div
        onMouseDown={() => setShowPopUp(true)}
        className="User flex w-[45px] shrink cursor-pointer items-center justify-center  gap-4 rounded-full p-2 text-xl  font-bold text-black transition-all xl:flex xl:h-[60px]   xl:w-[100%] xl:justify-start xl:p-3"
      >
        <div className="profilePicture ">{profilePicture}</div>
        <div className="Username  hidden font-medium xl:block">{user}</div>
        <UserPopUp
          show={showPopUp}
          setShowPopUp={setShowPopUp}
          setUser={props.setUser}
          setLogin={props.setLogin}
        ></UserPopUp>
      </div>
    </OuterClick>
  );
};

export default User;
