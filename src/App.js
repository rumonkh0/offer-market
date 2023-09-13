import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/adminLogin/Admin";
import Home from "./components/home/Home";
import AuthState from "./context/auth/AuthState";
import RequestsState from "./context/requests/RequestsState";

function App() {
  return (
    <AuthState>
      <RequestsState>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/admin/*" element={<Admin />}></Route>
            </Routes>
          </div>
        </Router>
      </RequestsState>
    </AuthState>
  );
}

export default App;
