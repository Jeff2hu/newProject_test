import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack>
      <h1>Home</h1>
      <Button onClick={() => navigate("/login")}>Login</Button>
    </Stack>
  );
};

export default Home;
