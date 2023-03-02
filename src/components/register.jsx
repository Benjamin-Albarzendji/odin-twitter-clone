import googleIcon from '../assets/google.png';
import { anonLogin, loginWithGoogle } from '../utils/Login_Handler';

// The Register component
const Register = (props) => {
  // Anonymous login handler
  const anonLoginHandler = () => {
    anonLogin(props.setLogin, props.setUser);
  };

  // Google login handler
  const googleLoginHandler = () => {
    loginWithGoogle(props.setLogin, props.setUser);
  };

  // If the user is logged in, return null else render the register component
  if (!props.login) {
    return (
      // The register component
      <div className=" ml-7 mt-3 hidden h-[300px]  w-[348px] rounded-2xl border-[0.5px] p-4 lg:block">
        <div className="text-xl font-bold">New on Twitter?</div>
        <div className="mt-1 text-sm">Register now for your own feed!</div>

        {/* Button Container */}
        <div className="buttons ">
          {/* Google Button */}
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

          {/* Create Account Button */}
          <div className="mt-3 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100">
            Create Account
          </div>

          {/* Demo Login button */}
          <div
            onClick={anonLoginHandler}
            className="mt-3 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100"
          >
            Demo Login
          </div>
        </div>
      </div>
    );
  }
};

export default Register;
