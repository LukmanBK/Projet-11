import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

// Action de gestion du processus de connexion de l'utilisateur
export const loginUser = (email, password, navigate) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER });

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
      } else {
        dispatch(userLoginFailure("Échec de la connexion"));
        localStorage.removeItem("token");
      }
    } catch (error) {
      dispatch(userLoginFailure("Identifiant(s) incorrect(s)"));
      localStorage.removeItem("token");
    }
  };
};


// Action de gestion de la deconnexion de l'utilisateur
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// Action de gestion de la xonnexion reussite de l'utilisateur
export const userLoginSuccess = (token) => ({
  type: USER_LOGIN_SUCCESS,
  payload: token,
});

// Action de gestion de la connexion echouee de l'utilisateur
export const userLoginFailure = (error) => ({
  type: USER_LOGIN_FAILURE,
  payload: error,
});
