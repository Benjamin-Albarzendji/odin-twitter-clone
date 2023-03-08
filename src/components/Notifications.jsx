const Notifications = (props) => {
  return (
    // Notifications container
    <div className="Notifications flex h-[100vh] overflow-hidden">
      <div className="Notifications w-[100vw] border-r-[0.5px] md:w-[600px] ">
        {/* Notifications Title */}
        <div className="title ml-5 mt-5 mb-2 overflow-hidden text-xl font-bold">
          Notifications
        </div>
      </div>
    </div>
  );
};

export default Notifications;
