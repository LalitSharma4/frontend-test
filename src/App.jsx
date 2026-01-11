import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApiData from "./pages/Apidata";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apidata" element={<ApiData />} />
    </Routes>
  );
}

export default App;