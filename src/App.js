import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./scripts/index";
import Home from "./pages/Home";
import MyInfo from "./pages/Allergy";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allergy" element={<MyInfo />} />
      </Routes>
    </div>
  );
}

export default App;
