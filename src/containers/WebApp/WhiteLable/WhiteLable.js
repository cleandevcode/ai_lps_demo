import React from 'react'
import './App.css'
import ReactDOM from 'react-dom';

const Columns = () => 
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
    <div>
      <ul>
        <li>Social Media Tools</li>
        <li>Marketing tools</li>
        <li>Business  Tools</li>
        <li>Writing tools</li>
        <li>Miscellneous tools</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Project Management</li>
        <li>Content Organizer</li>
        <li>Communication</li>
        <li>Social MEdia Manager</li>
        <li>AI Analytics</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Newsletter Release</li>
        <li>Blogs</li>
        <li>Loyalty Program</li>
        <li>Knowledge Base</li>
        <li>Support & Resource</li>
      </ul>
    </div>
  </div>

export default Columns;