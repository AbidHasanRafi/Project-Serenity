// import React from 'react';

const Settings = () => {
  return (
    <div className="section-content">
      <h2>Settings</h2>
      <p>Manage your account settings here:</p>
      <form>
        <label>
          Change Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Email Notifications:
          <input type="checkbox" />
        </label>
        <br />
        <button>Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
