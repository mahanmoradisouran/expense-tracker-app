const Notification = ({ data }) => {
  return (
    <div className="w-full rounded-lg pt-4 pb-5 px-3 flex justify-evenly items-center relative bg-Light-60 mb-4">
      <div className="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-sm text-Dark-50">{data.title}</h3>
      <span className="absolute right-2 bottom-2 text-xs text-Dark-25">
        {data.time.toNow()}
      </span>
    </div>
  );
};

export default Notification;
