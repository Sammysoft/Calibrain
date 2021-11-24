import api from "../api";
import { userLoggedIn } from "./auth";

export const register = (data) => (dispatch) => api.users.register(data).then(dispatch(userLoggedIn(user)))