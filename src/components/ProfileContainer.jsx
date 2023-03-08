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
      <div className="ProfileContainer w-[100vw] border-r-[0.5px] bg-blue-100 p-5 md:w-[600px]">
        {render ? (
          <img
            className="mt-[%] w-[140px] rounded-full"
            src={user.photoURL}
            alt=""
          />
        ) : null}
      </div>
    </div>
  );
};

export default ProfileContainer;
