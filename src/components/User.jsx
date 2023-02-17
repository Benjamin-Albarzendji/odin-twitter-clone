import { useState, useEffect } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const UserPopUp = (props) => {
  if (props.show === true) {
    return (
      <div
        onMouseLeave={() => props.setShowPopUp(false)}
        className="absolute top-[-95%] left-[30%] bg-blue-200 p-3"
      >
        Lesss go{' '}
      </div>
    );
  }
};

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
        <img src={props.user.photoURL} alt="User Profile Picture" />
      );
    }
  }, []);

  return (
    <div
      onMouseEnter={() => setShowPopUp(true)}
      onMouseLeave={() => setTimeout(() => setShowPopUp(false), 1000)}
      className="User absolute bottom-4 flex h-[52px] w-[45px] cursor-pointer  items-center gap-4 rounded-full bg-white p-3 p-2 text-xl font-bold text-black  transition-all hover:rounded-full hover:bg-gray-100 xl:ml-[46%] xl:h-[60px] xl:w-[45%] xl:p-3"
    >
      <div className="profilePicture a">{profilePicture}</div>
      <div className="Username hidden font-medium xl:block">{user}</div>
      <UserPopUp show={showPopUp} setShowPopUp={setShowPopUp}></UserPopUp>
    </div>
  );
};

export default User;
