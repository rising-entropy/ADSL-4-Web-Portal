import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddDepartmentPage from './pages/AddDepartmentPage'
import DepartmentsPage from './pages/DepartmentsPage'
import AddStudentPage from './pages/AddStudentPage'
import StudentsPage from './pages/StudentsPage'
import AddInstructorPage from './pages/AddInstructorPage';
import InstructorsPage from './pages/InstructorsPage';


function App() {
  return (
    <>
  <Router className='app'>
    <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/add-department" element={<AddDepartmentPage/>}/>
        <Route exact path="/departments" element={<DepartmentsPage/>}/>
        <Route exact path="/add-student" element={<AddStudentPage/>}/>
        <Route exact path="/students" element={<StudentsPage/>}/>
        <Route exact path="/add-instructor" element={<AddInstructorPage/>}/>
        <Route exact path="/instructors" element={<InstructorsPage/>}/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
