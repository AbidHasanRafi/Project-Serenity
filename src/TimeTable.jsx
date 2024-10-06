// import React from 'react';

const TimeTable = () => {
  return (
    <div className="section-content">
      <h2>Time Table</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Course</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>English Class</td>
            <td>9:00 AM - 11:00 AM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>IT Class</td>
            <td>11:30 AM - 1:30 PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Computing Workshop</td>
            <td>2:00 PM - 4:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;
