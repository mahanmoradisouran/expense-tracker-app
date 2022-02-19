import * as React from "react";
import IconButton from "@mui/material/IconButton";
const NavBar = ({ label, event, styles }) => {
  return (
    <div className={`w-full fixed align-middle top-0 p-5 ${styles}`}>
      <div className="absolute left-5">
        <IconButton
          onClick={event}
          color="inherit"
          aria-label="menu"
          style={{ padding: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 p-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </IconButton>
      </div>
      <h2 className="md:text-xl text-s inline-block font-semiBold text-center">
        {label}
      </h2>
    </div>
  );
};

export default NavBar;
