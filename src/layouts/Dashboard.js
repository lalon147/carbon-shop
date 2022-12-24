import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Dashboard = () => {
  return (
    <div>
    <Header></Header>
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content   ">
        <Outlet></Outlet>
       
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content">
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          
           
            
        </ul>
      </div>
    </div>
  </div>
  );
  
}

export default Dashboard