import React, { useState } from 'react';
import '../utils/add_appointment.css';
import { useNavigate, Link } from 'react-router-dom';

const AddAppointment = () => {
  const [ownerName, setOwnerName] = useState('');
  const [contact, setContact] = useState('');
  const [petCount, setPetCount] = useState('');
  const [petForms, setPetForms] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const navigate = useNavigate();

  const generatePetForms = () => {
    const count = parseInt(petCount);
    if (isNaN(count) || count < 1 || count > 100) {
      alert('Please enter a valid number of pets (1–100).');
      return;
    }

    const forms = [];
    for (let i = 1; i <= count; i++) {
      forms.push({ name: '', breed: '', weight: '', service: '' });
    }
    setPetForms(forms);
  };

  const updatePetForm = (index, field, value) => {
    const updatedForms = [...petForms];
    updatedForms[index][field] = value;
    setPetForms(updatedForms);
  };

  const handleSubmit = () => {
    const appointmentData = {
      ownerName,
      contact,
      date,
      time,
      pets: petForms,
    };

    console.log('Submitting appointment:', appointmentData);
    alert('Appointment added successfully!');
    // POST to backend if needed
  };

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
          <li><Link to="/landing_page">Home</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/medical_records">Medical Records</Link></li>
          <li><Link to="/invoice">Invoice</Link></li>
          <li><Link to="/file_maintenance">File Maintenance</Link></li>
        </ul>

        <div className="user">
          <Link to="#">
            <img src="../utils/images/user_icon.png" className="user-photo" alt="User Icon" />
          </Link>
        </div>
      </header>

      <main>
        <div className="form-row">
          <div className="info-box">
            <h2>Owner's Information</h2>
            <input
              type="text"
              placeholder="Name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Contact No."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="info-box">
            <h2>How many pets?</h2>
            <input
              type="number"
              min="1"
              max="100"
              placeholder="Enter number of pets"
              value={petCount}
              onChange={(e) => setPetCount(e.target.value)}
            />
            <button className="btn blue" onClick={generatePetForms}>Confirm</button>
          </div>
        </div>

        {petForms.map((pet, index) => (
          <div className="info-box" key={index}>
            <h2>Pet {index + 1} Information</h2>
            <input
              type="text"
              placeholder="Name"
              value={pet.name}
              onChange={(e) => updatePetForm(index, 'name', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Breed"
              value={pet.breed}
              onChange={(e) => updatePetForm(index, 'breed', e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Weight (kg)"
              value={pet.weight}
              onChange={(e) => updatePetForm(index, 'weight', e.target.value)}
              required
            />
            <select
              value={pet.service}
              onChange={(e) => updatePetForm(index, 'service', e.target.value)}
              required
            >
              <option value="">Service</option>
              <option>Grooming</option>
              <option>Checkup</option>
              <option>Vaccination</option>
              <option>Surgery</option>
            </select>
          </div>
        ))}

        <div className="info-box">
          <h2>Date and Time</h2>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select Time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>

        <div className="form-footer">
          <button className="btn blue" onClick={handleSubmit}>Add Appointment</button>
        </div>
      </main>
    </div>
  );
};

export default AddAppointment;
