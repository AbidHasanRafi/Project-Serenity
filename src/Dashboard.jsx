// import React from 'react';
import './Dashboard.css'; // Create a separate CSS file for styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="Team Logo.png" alt="Team Logo" className="team-logo" />
          <h3>OXFORD</h3>
        </div>
        <div className="user-info">
          <img src="user-avatar.png" alt="User Avatar" className="user-avatar" />
          <p>Hi, Taha</p>
          <span>E173037</span>
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>My Courses</li>
          <li>Assignments</li>
          <li>Time Table</li>
          <li>Forum</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <p>Welcome Back, Taha</p>
        </header>

        <div className="announcement">
          <img src="oxford-scholarship-banner.png" alt="Scholarship Banner" />
          <p>Oxford scholarships for PhD (Dphil) in Biology, 2023-24, University of Oxford, UK</p>
        </div>

        <div className="courses-overview">
          <div className="course-card">
            <p>Diploma in English</p>
            <span>OXF/ENG/01</span>
          </div>
          <div className="course-card">
            <p>Diploma in IT</p>
            <span>OXF/IT/01</span>
          </div>
          <div className="course-card">
            <p>HND in Computing</p>
            <span>OXF/HND/01</span>
          </div>
        </div>

        <div className="progress-cards">
          <div className="progress-card">
            <p>Module Progress:</p>
            <span>90%</span>
          </div>
          <div className="progress-card">
            <p>Assignment Progress:</p>
            <span>10%</span>
          </div>
          <div className="progress-card">
            <p>Attendance Progress:</p>
            <span>97%</span>
          </div>
          <div className="progress-card">
            <p>Course Progress:</p>
            <span>50%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
