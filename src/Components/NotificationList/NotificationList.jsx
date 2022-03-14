import NavBar from "../Navbar/Navbar";
import Notification from "../Notification/Notification";

const NotificationList = ({
  showNotification,
  setShowNotification,
  notification,
}) => {

  return (
    <div className="fixed w-full h-full bottom-0 top-0 right-0 left-0 bg-Light-100 p-1 z-50 pt-14">
      <NavBar
        label="notification"
        event={() => setShowNotification({ ...showNotification, show: false })}
      />
      <div className="w-full flex h-full flex-col px-4 pt-5 items-center overflow-y-scroll">
        {notification.length > 0 ? (
          notification.map((n) => <Notification data={n} key={1} />)
        ) : (
          <div className="flex justify-center items-center flex-col h-full w-full">
            <p className="text-sm text-Dark-75">
              Your notification list is empty
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-Dark-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationList;
