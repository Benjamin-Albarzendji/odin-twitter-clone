import googleIcon from '../assets/google.png';

const Register = () => {
  return (
    <div className=" ml-7 mt-3 hidden h-[200px]  w-[348px] rounded-2xl border-[0.5px] p-4 lg:block">
      <div className="text-xl font-bold">New on Twitter?</div>
      <div className="mt-1 text-sm">Register now for your own feed!</div>
      <div className="buttons ">
        <div className="mt-5 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100 relative">
          <img className="w-[17px] absolute left-10" src={googleIcon} alt="" />
          Register with Google
        </div>
        <div className="mt-3 flex w-[95%] cursor-pointer items-center justify-center rounded-full border-[1px] p-2 font-bold hover:bg-gray-100">
          Create Account
        </div>
      </div>
    </div>
  );
};

export default Register;
