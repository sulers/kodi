import { Route, BrowserRouter as Router, Routes } from "react-router-dom"

//pages
import HomePage from "./pages/HomePage"
import NotFound from "./pages/NotFound"

import { courses } from "./utils/courses";
//import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
    // <CourseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage courses={courses} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    // </CourseProvider>
  );
}

export default App

