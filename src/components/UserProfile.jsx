import React from "react";
import { UserAuth } from "../contexts/AuthContextProvider";

const UserProfile = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      UserProfile
      <div>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
