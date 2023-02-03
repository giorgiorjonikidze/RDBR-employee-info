import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

    
    </Routes>
  );
}

export default App;
