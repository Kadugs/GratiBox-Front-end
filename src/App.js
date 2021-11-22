import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home/Home';
import SignUp from './components/Account/SignUp';
import SignIn from './components/Account/SignIn';
import Plans from './components/Plans/Plans';
import SignPlan from './components/Plans/SignPlan';
import SignPlanContext from './contexts/SignPlanContext';
import Shipment from './components/Plans/Shipment';
import { useState } from 'react';

export default function App() {
  const [plan, setPlan] = useState({});
  return (
    <SignPlanContext.Provider value={{ plan, setPlan }}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/plans" element={<Plans />} />
          <Route exact path="/sign-plan" element={<SignPlan />} />
          <Route exact path="/sign-plan/shipment" element={<Shipment />} />
        </Routes>
      </BrowserRouter>
    </SignPlanContext.Provider>
  );
}
