import useId from "../hooks/useId";
import HomePage from "../pages/Home";
import Properties from "../pages/Properties";

export const navbar = [
  {
    id: useId,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <Properties />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <h1>generic sign in</h1>,
    title: "Sign in",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>generic sign up</h1>,
    title: "Sign up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
