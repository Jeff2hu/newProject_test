import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NotFound from "./page/NotFound";
import LoginScreen from "./page/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
