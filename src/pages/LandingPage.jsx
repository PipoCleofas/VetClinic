import React from 'react';
import '../utils/landing_page.css';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const queueData = [
    { name: 'John Clyde Wylie T. Taruc', contact: '09486079888', service: 'Grooming', time: '1:00 PM' },
    { name: 'Jane Doe', contact: '09123456789', service: 'Checkup', time: '1:30 PM' },
    { name: 'Michael Santos', contact: '09051234567', service: 'Vaccination', time: '2:00 PM' },
    { name: 'Anna Lopez', contact: '09331239876', service: 'Consultation', time: '2:30 PM' },
    { name: 'Carlos Dela Cruz', contact: '09109874567', service: 'Dental Cleaning', time: '3:00 PM' },
    { name: 'Emily Reyes', contact: '09561234567', service: 'Grooming', time: '3:30 PM' },
    { name: 'Brian Mendoza', contact: '09987654321', service: 'Checkup', time: '4:00 PM' },
    { name: 'Isabella Cruz', contact: '09123456700', service: 'Vaccination', time: '4:30 PM' },
    { name: 'Luis Ramos', contact: '09234567890', service: 'Surgery', time: '5:00 PM' },
    { name: 'Angela Bautista', contact: '09478901234', service: 'Consultation', time: '5:30 PM' },
  ];

  const handleAction = (action, name) => {
    alert(`${action} for ${name}`);
  };

  return (
    <div>
      <header>
        <Link to="/landing_page">
          <img src="/images/pawsionate-logo.png" alt="Pawsionate Hands Logo" className="logo" />
        </Link>

        <ul className="nav-menu">
          <li className="active"><Link to="/landing_page">Home</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/medical_records">Medical Records</Link></li>
          <li><Link to="/invoice">Invoice</Link></li>
          <li><Link to="/file_maintenance">File Maintenance</Link></li>
        </ul>

        <div className="user-greeting">
          <span>Hello, <strong>Username</strong>!</span>
          <Link to="#" className="user-photo-link">
            <img src="/images/user_icon.png" className="user-photo" alt="User Icon" />
          </Link>
        </div>
      </header>

      <main>
        <section className="queue">
          <h2>Queue</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact #</th>
                <th>Service</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {queueData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.contact}</td>
                  <td>{entry.service}</td>
                  <td>{entry.time}</td>
                  <td>
                    <button className="btn small done" onClick={() => handleAction('Done', entry.name)}>Done</button>
                    <button className="btn small archive" onClick={() => handleAction('Archive', entry.name)}>Archive</button>
                    <button className="btn-icon delete" onClick={() => handleAction('Delete', entry.name)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="button-group">
            <button className="btn red" onClick={() => navigate('/queue/add')}>Add to Queue</button>
            <button className="btn blue" onClick={() => navigate('/appointment/add')}>Add Appointment</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
