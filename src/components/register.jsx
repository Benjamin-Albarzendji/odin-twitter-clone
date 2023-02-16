import googleIcon from '../assets/google.png';
import { anonLogin } from '../utils/loginHandler';

const Register = (props) => {
  const loginHandler = () => {
    if (anonLogin()) {
      props.setLogin(true);
    }
  };
  if (!props.login) {
    return (
      <div className=" ml-7 mt-3 hidden h-[300px]  w-[348px] rounded-2xl border-[0.5px] p-4 lg:block">
        <div className="text-xl font-bold">New on Twitter?</div>
        <div className="mt-1 text-sm">Register now for your own feed!</div>
        <div className="buttons ">
          <div className="relative mt-5 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100">
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
            onClick={loginHandler}
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
