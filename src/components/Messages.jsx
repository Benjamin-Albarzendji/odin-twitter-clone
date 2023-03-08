const Messages = (props) => {
  return (
    // Messages container
    <div className="Messages flex h-[100vh] overflow-hidden">
      <div className="Messages w-[100vw] border-r-[0.5px] md:w-[600px] ">
        {/* Messages Title */}
        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          Messages
        </div>
      </div>
    </div>
  );
};

export default Messages;
