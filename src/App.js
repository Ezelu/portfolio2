import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavbarDesktop from "./components/NavbarDesktop/NavbarDesktop";

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <NavbarDesktop />
      </div>

      <div className="routes">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
