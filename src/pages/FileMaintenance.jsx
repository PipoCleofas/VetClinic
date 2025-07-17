import React from 'react';
import '../utils/file_maintenance.css';
import { Link } from 'react-router-dom';

const FileMaintenance = () => {
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
          <li><Link to="/medical_records">Medical Records</Link></li>
          <li><Link to="/invoice">Invoice</Link></li>
          <li className="active"><Link to="/file_maintenance">File Maintenance</Link></li>
        </ul>

        <div className="user">
          <Link to="#">
            <img src="/images/user_icon.png" className="user-photo" alt="User Icon" />
          </Link>
        </div>
      </header>

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
