import React from 'react';
import '../utils/medical_records.css';
import { useNavigate } from 'react-router-dom';

const MedicalRecords = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <img
          src="../utils/images/pawsionate-logo.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate('/landing_page')}
          style={{ cursor: 'pointer' }}
        />

        <ul className="nav-menu">
          <li><a href="/landing_page">Home</a></li>
          <li><a href="/appointment">Appointment</a></li>
          <li className="active"><a href="/medical_records">Medical Records</a></li>
          <li><a href="/invoice">Invoice</a></li>
          <li><a href="/file_maintenance">File Maintenance</a></li>
        </ul>

        <div className="user">
          <a href="#">
            <img src="../utils/images/user_icon.png" className="user-photo" alt="User Icon" />
          </a>
        </div>
      </header>

      <main>
        <section className="medical-records-section">
          <h2>Medical Records</h2>
          <p>This is where medical records will be listed or managed.</p>
          {/* Add your table, forms, or buttons here */}
        </section>
      </main>
    </div>
  );
};

export default MedicalRecords;
