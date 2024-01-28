import LoginScreen from "@/page/Account/LoginScreen";
import RegisterScreen from "@/page/Account/RegisterScreen";
import { Outlet } from "react-router-dom";

export const AccountRouterChildrens = [
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "register",
    element: <RegisterScreen />,
  },
];

export const AccountRouter = () => {
  return <Outlet />;
};
