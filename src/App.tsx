import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound";

import { courses } from "./utils/courses";
import CourseList from "./pages/CourseList";
//import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
    // <CourseProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/courses" element={<CourseList courses={courses} />} />
      </Routes>
    </Router>
    // </CourseProvider>
  );
}

export default App;
