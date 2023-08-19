import './App.css';
import Home from './Routes/Home';
import { Route, Routes } from "react-router-dom";
import LoginRoute from './Routes/LoginRoute';
import SignupRoute from './Routes/SignupRoute';
import ContactUs from './Component/FrontPage/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/signup" element={<SignupRoute />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
