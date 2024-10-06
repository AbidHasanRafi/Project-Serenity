// import React from 'react';

const Forum = () => {
  return (
    <div className="section-content">
      <h2>Forum</h2>
      <p>Welcome to the student forum. Post your questions or comments below:</p>
      <textarea rows="5" cols="50" placeholder="Type your question here..."></textarea>
      <button>Submit</button>

      <h3>Recent Discussions:</h3>
      <ul>
        <li>How to prepare for the IT final project? - John Doe</li>
        <li>Any tips for improving English writing? - Jane Smith</li>
      </ul>
    </div>
  );
};

export default Forum;
