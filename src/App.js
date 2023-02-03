import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import UserPage from "./pages/userPage";
import Experience from './pages/experiencePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

export default App;
