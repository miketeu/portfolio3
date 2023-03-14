import React from "react";
import { Link, Route, Routes } from 'react-router-dom';

function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <h5>
        <ul>
          <li>Twitter:   </li>
          <li>Facebook:  </li>
          <li>LinkedIn</li>
          <li>Phone: 07932 163 092  </li>
          <li>Email: mike.teuten@gmail.com  </li>
        </ul>

        <p>The calendar page will link to a Calendly app, on a separate page and accessed only after name and contact details have been submitted, so that potential clients can book appointments.</p>
     
     
     
     

      </h5>
      <Link to="contact" role="button" className="btn btn-link">
        Details
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Calendar
      </Link>

    
      <Routes>
        <Route path="contact" element={<contact />} />
      </Routes>
    </div>
  );
}

export default Contact;
