import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../actions/user.actions";
import "./headerProfile.css";

const HeaderProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);
  return (
    <div className="header">
      <>
        <h1>
          Welcome back
          <br />
          {userProfile.firstName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </>
    </div>
  );
};

export default HeaderProfile;
