import AvatarSetter from "Admin/helpers/AvatarSetter";
import React from "react";

const TopNavBar = () => {
  // Local Storage Value Variables
  const localStorageResponse = localStorage.getItem("user");
  const response = JSON.parse(localStorageResponse ?? "");
  const userName = response.name;
  return (
    <div className="top-navbar-container">
      <button>
        <AvatarSetter name={userName} />
      </button>
    </div>
  );
};

export default TopNavBar;
