import api from "../api";
import { userLoggedIn } from "./auth";



export const register = (data) => (dispatch) =>
    api.user.register(data)
        .then(user => {dispatch(userLoggedIn(user))})

export const registerstaff = (data) => (dispatch) =>
    api.user.registerstaff(data)
        .then(user => {dispatch(userLoggedIn(user))})