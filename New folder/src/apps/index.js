import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setAuthToken } from "../redux/utils";
import { actions } from "../redux/slices/auth";
import SignInLifeer from "./auth_life/signIn";
import * as Routes from "./routes";

const router = createBrowserRouter([
  { path: "/", element: <SignInLifeer /> },
  ...Routes.Public,
  ...Routes.Dashboard,
  ...Routes.Chat,
  ...Routes.Support,
  ...Routes.User,
]);

const Apps = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.token;
    if (token) setAuthToken(token);

    window.addEventListener("storage", () => {
      if (!localStorage.token) dispatch(actions.signOut());
    });
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default Apps;
