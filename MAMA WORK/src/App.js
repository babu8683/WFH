import './App.css';
import Home from './Routes/Home';
import { Route, Routes } from "react-router-dom";
import LoginRoute from './Routes/LoginRoute';
import SignupRoute from './Routes/SignupRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/signup" element={<SignupRoute />} />
      </Routes>
    </div>
  );
}

export default App;
