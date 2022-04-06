import './assets/styles/App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/Auth/ResetPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
