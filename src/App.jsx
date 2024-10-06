import  { useState } from 'react';
import './App.css';
import Home from './Home';
import MyCourses from './MyCourses';
import Assignments from './Assignments';
import TimeTable from './TimeTable';
import Forum from './Forum';
import Settings from './Settings';
// import Dashboard from './Dashboard';

function App() {
   
  const [activeSection, setActiveSection] = useState('Home'); // State to track the active section

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      case 'My Courses':
        return <MyCourses />;
      case 'Assignments':
        return <Assignments />;
      case 'Time Table':
        return <TimeTable />;
      case 'Forum':
        return <Forum />;
      case 'Settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="Team Logo.png" alt="team Logo" className="team-logo" />
          <h3>Serenity</h3>
        </div>
        <div className="user-info">
          <img src="user-avatar.png" alt="User Avatar" className="user-avatar" />
          <p>Hi, Taha</p>
          <span>E173037</span>
        </div>
        <ul className="menu">
          <li onClick={() => setActiveSection('Home')}>Home</li>
          <li onClick={() => setActiveSection('My Courses')}>My Courses</li>
          <li onClick={() => setActiveSection('Assignments')}>Assignments</li>
          <li onClick={() => setActiveSection('Time Table')}>Time Table</li>
          <li onClick={() => setActiveSection('Forum')}>Forum</li>
          <li onClick={() => setActiveSection('Settings')}>Settings</li>
          {/* <li onClick={() => setActiveSection('Dashboard')}>Dashboard</li> */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
