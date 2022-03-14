import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Content } from "../ContentProvider/ConetntProvider";

// icons used in bottomNaigation
const icons = {
  home: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    solid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  add: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4v16m8-8H4"
      />
    </svg>
  ),
  profile: {
    outline: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    solid: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};


// customize bottom action mui
const MyBottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: ${purple[100]};
  &.Mui-selected {
    color: ${purple.A700};
  }
`);
// customize bottom action mui


const BottomNav = () => {
  const content = React.useContext(Content);

  const [value, setValue] = React.useState(content.state);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    content.dispatch(newValue);
  };

  React.useEffect(()=>{
    setValue(content.state)
  },[content])

  return (
    <>
      <BottomNavigation
        className="fixed bottom-0 z-40"
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <MyBottomNavigationAction
          label="Home"
          value="Home"
          icon={value === "Home" ? icons.home.solid : icons.home.outline}
        />
        <MyBottomNavigationAction label="Add" value="Add" icon={icons.add} />
        <MyBottomNavigationAction
          label="Profile"
          value="Profile"
          icon={
            value === "Profile" ? icons.profile.solid : icons.profile.outline
          }
        />
      </BottomNavigation>
    </>
  );
};
export default BottomNav;
