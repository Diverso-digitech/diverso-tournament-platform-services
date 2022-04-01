import { API } from "../constants/apiConstants.js";

const protectedRoutes = [API.LOGOUT, API.SECRET];

export const isProtectedRoute = (routeName) => {
  return protectedRoutes.find((route) => route === routeName) !== -1;
};
