import React, { useState } from 'react';
import './appointment.css'; // Make sure CSS is correctly placed
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [sortOrder, setSortOrder] = useState('Newest to oldest');
  const navigate = useNavigate();

  const appointments = [
    {
      name: 'John Clyde Wylie T. Taruc',
      contact: '09486079988',
      dateTime: 'April 28 - Morning',
      service: 'Grooming',
    },
    {
      name: 'John Clyde Wylie T. Taruc',
      contact: '09486079988',
      dateTime: 'April 29 - Afternoon',
      service: 'Grooming',
    },
  ];

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    // You can implement actual sorting logic here if connected to backend or state
  };

  const handleAddToQueue = (name) => {
    alert(`${name} added to queue.`);
    // Add actual logic here
  };

  const handleEdit = (name) => {
    alert(`Edit appointment for ${name}`);
    // Navigate to edit page or open modal
  };

  return (
    <div>
      <header>
        <img
          src="/images/pawsionate-logo.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate('/landing_page')}
          style={{ cursor: 'pointer' }}
        />

        <ul className="nav-menu">
          <li><a href="/landing_page">Home</a></li>
          <li className="active"><a href="/appointment">Appointment</a></li>
          <li><a href="/medical_records">Medical Records</a></li>
          <li><a href="/invoice">Invoice</a></li>
          <li><a href="/file_maintenance">File Maintenance</a></li>
        </ul>

        <div className="user">
          <a href="#">
            <img src="/images/user_icon.png" className="user-photo" alt="User Icon" />
          </a>
        </div>
      </header>

      <main>
        <section className="appointments-section">
          <h2>Appointments</h2>

          <div className="appointments-box">
            <div className="appointments-header">
              <label htmlFor="sort">Sort:</label>
              <select id="sort" value={sortOrder} onChange={handleSortChange}>
                <option>Newest to oldest</option>
                <option>Oldest to newest</option>
              </select>
            </div>

            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact #</th>
                  <th>Date & Time</th>
                  <th>Service</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{appt.name}</td>
                    <td>{appt.contact}</td>
                    <td>{appt.dateTime}</td>
                    <td>{appt.service}</td>
                    <td>
                      <button className="btn red" onClick={() => handleAddToQueue(appt.name)}>
                        Add to Queue
                      </button>
                      <button className="btn-icon" onClick={() => handleEdit(appt.name)}>
                        ✎
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Appointment;
