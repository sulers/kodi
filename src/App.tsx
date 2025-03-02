import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//styles
import "./styles/App.css";

//pages imports
import HomePage from "./pages/HomePage";
import CourseDetails from "./pages/CourseDetails";
import CourseLearn from "./pages/CourseLearn";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import QuizPage from "./pages/Quiz";
import Task from "./pages/Task";
import NotFound from "./pages/NotFound";
import ModulePage from "./pages/ModulePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/learn/:id" element={<CourseLearn />} />
        <Route path="/module/:id/:index" element={<ModulePage />} />
        <Route path="/quiz/:id/:index" element={<QuizPage />} />
        <Route path="/task/:id/:index" element={<Task />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
