import React from 'react';
import './file_maintenance.css';
import { useNavigate } from 'react-router-dom';

const FileMaintenance = () => {
  const navigate = useNavigate();

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
          <li><a href="/appointment">Appointment</a></li>
          <li><a href="/medical_records">Medical Records</a></li>
          <li><a href="/invoice">Invoice</a></li>
          <li className="active"><a href="/file_maintenance">File Maintenance</a></li>
        </ul>

        <div className="user">
          <a href="#">
            <img src="/images/user_icon.png" className="user-photo" alt="User Icon" />
          </a>
        </div>
      </header>

      {/* Add more content here as needed for file maintenance */}
      <main>
        <section className="file-maintenance-section">
          <h2>File Maintenance</h2>
          <p>This section can contain forms or tools to manage breeds, services, products, and users.</p>
        </section>
      </main>
    </div>
  );
};

export default FileMaintenance;
