import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_PROFILE = "USER_PROFILE";

// Action de gestion du processus de connexion de l'utilisateur
export const loginUser = (email, password, navigate) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email: email,
          password: password,
        }
      );
      console.log(response);

      if (response.status === 200) {
        const token = response.data.body.token;
        localStorage.setItem("token", token);
        dispatch(userLoginSuccess(token));
        navigate("/profile");
        dispatch(userLoginSuccess());
      } else {
        localStorage.removeItem("token");
      }
      if (response.status === 401) {
        localStorage.remove("token");
        navigate("/login");
      }
    } catch (error) {
      dispatch(userLoginFailure("Identifiant(s) incorrect(s)"));
      localStorage.removeItem("token");
    }
  };
};

// Action de gestion de la deconnexion de l'utilisateur
export const logoutUser = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT_USER,
  };
};

// Action de gestion de la connexion reussite de l'utilisateur
export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
});

// Action de gestion de la connexion echouee de l'utilisateur
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});

// Action de gestion de l'état des informations du profil de l'utilisateur
export const userProfileSuccess = (userProfile) => ({
  type: USER_PROFILE,
  payload: userProfile,
});

// On gere la recuperation du profil de l'user depuis le serveur
export const fetchUserProfile = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        const userProfile = response.data.body;
        dispatch(userProfileSuccess(userProfile));
      }
    } catch (error) {
      console.error(error);
    }
  };
};
