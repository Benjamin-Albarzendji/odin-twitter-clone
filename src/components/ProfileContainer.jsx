import { useState, useLayoutEffect, useEffect } from 'react';

const ProfileContainer = (props) => {
  const [user, setUser] = useState(null);
  const [render, setRender] = useState(false);

  useLayoutEffect(() => {
    if (props.user !== null) {
      setUser(props.user);
      setRender(true);
    }
  }, [props.user]);

  return (
    // ProfileContainer container
    <div className="ProfileContainer flex h-[300px] border-b-[0.5px]">
      <div className="ProfileContainer w-[100vw] border-r-[0.5px] p-5 md:w-[600px]">
        {render ? (
          <div className="userInformation ">
            {/* User Profile Picture */}
            <img
              className="mt-[5%] w-[140px] rounded-full bg-white p-1"
              src={user.photoURL}
              alt=""
            />
            {/* User Display Name */}
            <div className="userDisplayName mt-5 text-xl font-bold">
              {user.displayName}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileContainer;
