import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../actions/user.actions";
import EditName from "../EditName/EditName";
import "./headerProfile.css";

const HeaderProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <div className="header">
      {isEditing ? (
        <EditName setIsEditing={setIsEditing} />
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {userProfile.userName}!
          </h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
};

export default HeaderProfile;
