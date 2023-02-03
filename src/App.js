import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import UserPage from "./pages/userPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/user" element={<UserPage />} />

    
    </Routes>
  );
}

export default App;
