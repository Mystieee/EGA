import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css';
import Register from "./Register/Register"
import Topbar from "./Topbar/Topbar"
import Home from "./Home/Home"
import Login from "./Login/Login"
import RegisterSuccess from "./Register/RegisterSuccess";
import UserAccount from "./UserAccount/UserAccount"
import TransferFunds from "./TransferFunds/TransferFunds"
function App() {
  const currentUser = true;
  return (
    <div>

      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/registerSuccess" element={<RegisterSuccess />}></Route>
          <Route path="/userAccoutDetails" element={<UserAccount />}></Route>
          <Route path="/transferFunds" element={<TransferFunds />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
