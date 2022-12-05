import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container" >
          <Header />
          <Routes>
          <Route path="/register" element={< Register />}/>
          <Route path="/Login" element={< Login />}/>
          <Route path="/dashboard" element={< Dashboard />}/>
          </Routes>
        
        </div>
      </Router>
    </>
  );
}

export default App;
