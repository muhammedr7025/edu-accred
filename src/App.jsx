/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './Pages/AdminDashBoard';
import Login from './Pages/Login';
import Staff from './Components/AdminDashBoardItem/Staff';
import Department from './Components/AdminDashBoardItem/Department';
import Student from './Components/AdminDashBoardItem/Student';

const App = () => {
  const currentUser = true;

  const ProtectedRoute = ({ element }) => {
    return currentUser ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact element={<ProtectedRoute element={<AdminDashboard />} />}
        >
          <Route path="/" element={<Staff />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/department" element={<Department />} />
          <Route path="/student" element={<Student />} />
          
        
        </Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
                
      
      </Routes>
    </Router>
  );
};

export default App;
