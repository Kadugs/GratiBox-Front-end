import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./components/Home/Home";
import SignUp from "./components/Account/SignUp";
import SignIn from "./components/Account/SignIn";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
