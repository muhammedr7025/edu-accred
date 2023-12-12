// AdminDashboard.jsx


import NavBar from '../Components/NavBar/AdminNavBar';
import SideBar from '../Components/SideBar/AdminSideBar';
import { Outlet } from 'react-router-dom';
// import Staff from './AdminDashBoardItem/Staff';
// import Department from './AdminDashBoardItem/Department';

const AdminDashboard = () => {
  return (
    <>
      <NavBar />
      <div className='flex'>
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminDashboard;
