import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/Home/Home';
export default function App() {
  return (
    <BrowserRouter>
    <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter >
  );
}