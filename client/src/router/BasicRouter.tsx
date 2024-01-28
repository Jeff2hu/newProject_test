import Home from "@/page/Home";
import useUserStore from "@/zustand/user";
import { Avatar, Button, Stack } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserInfo from "../page/Account/UserInfoScreen";

export const BasicRouter = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/account/login", { replace: true });
    }
  }, [user]);

  return (
    <Stack
      p={3}
      bgcolor="#eee"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Button onClick={() => navigate("/")}>
        <Avatar />
      </Button>
      <Outlet />
    </Stack>
  );
};

export const BasicRouterChildrens = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "user/:id",
    element: <UserInfo />,
  },
];
