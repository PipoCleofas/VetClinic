import React from 'react';
import '../utils/medical_records.css';
import { Link } from 'react-router-dom';

const MedicalRecords = () => {
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
          <li><Link to="/appointment">Appointment</Link></li>
          <li className="active"><Link to="/medical_records">Medical Records</Link></li>
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
        <section className="medical-records-section">
          <h2>Medical Records</h2>
          <p>This is where medical records will be listed or managed.</p>
        </section>
      </main>
    </div>
  );
};

export default MedicalRecords;
