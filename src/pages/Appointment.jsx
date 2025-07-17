import React, { useState } from 'react';
import '../utils/appointment.css';
import { useNavigate, Link } from 'react-router-dom';

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
    // Add actual sorting logic if needed
  };

  const handleAddToQueue = (name) => {
    alert(`${name} added to queue.`);
    // Add to queue logic
  };

  const handleEdit = (name) => {
    alert(`Edit appointment for ${name}`);
    // Navigate to edit page or open modal
  };

  return (
    <div>
      <header>
        <Link to="/landing_page">
          <img
            src="/images/pawsionate-logo.png"
            alt="Logo"
            className="logo"
          />
        </Link>

        <ul className="nav-menu">
          <li><Link to="/landing_page">Home</Link></li>
          <li className="active"><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/medical_records">Medical Records</Link></li>
          <li><Link to="/invoice">Invoice</Link></li>
          <li><Link to="/file_maintenance">File Maintenance</Link></li>
        </ul>

        <div className="user">
          <Link to="#">
            <img src="/images/user_icon.png" className="user-photo" alt="User Icon" />
          </Link>
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
