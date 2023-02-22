import googleIcon from '../assets/google.png';
import { anonLogin, loginWithGoogle } from '../utils/Login_Handler';

const Register = (props) => {
  const anonLoginHandler = () => {
    anonLogin(props.setLogin, props.setUser);
  };

  const googleLoginHandler = () => {
    loginWithGoogle(props.setLogin, props.setUser);
  };

  if (!props.login) {
    return (
      <div className=" ml-7 mt-3 hidden h-[300px]  w-[348px] rounded-2xl border-[0.5px] p-4 lg:block">
        <div className="text-xl font-bold">New on Twitter?</div>
        <div className="mt-1 text-sm">Register now for your own feed!</div>
        <div className="buttons ">
          <div
            onClick={googleLoginHandler}
            className="relative mt-5 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100"
          >
            <img
              className="absolute left-10 w-[17px]"
              src={googleIcon}
              alt=""
            />
            Register with Google
          </div>

          <div className="mt-3 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100">
            Create Account
          </div>
          <div
            onClick={anonLoginHandler}
            className="mt-3 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100"
          >
            Demo Log in
          </div>
        </div>
      </div>
    );
  }
};

export default Register;
