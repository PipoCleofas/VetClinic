import React from 'react';
import '../utils/invoice.css';
import { useNavigate } from 'react-router-dom';

const Invoice = () => {
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
          <li><a href="/medical_records">Medical Records</a></li>
          <li className="active"><a href="/invoice">Invoice</a></li>
          <li><a href="/file_maintenance">File Maintenance</a></li>
        </ul>

        <div className="user">
          <a href="#">
            <img src="../utils/images/user_icon.png" className="user-photo" alt="User Icon" />
          </a>
        </div>
      </header>

      {/* You can add invoice form or table here */}
      <main>
        <section className="invoice-section">
          <h2>Invoices</h2>
          <p>This section will show a list of invoices or allow you to generate new ones.</p>
        </section>
      </main>
    </div>
  );
};

export default Invoice;
