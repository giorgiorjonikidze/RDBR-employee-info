import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import UserPage from "./pages/userPage";
import Experience from "./pages/experiencePage";
import Education from "./pages/educationPage";
import SuccessPage from "./pages/successPage";

function App() {
  return (
    <>
      <div className="flex">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="user" element={<UserPage />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="success" element={<SuccessPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
