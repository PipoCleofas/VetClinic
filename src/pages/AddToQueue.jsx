import React, { useState } from 'react';
import './add_to_queue.css';
import { useNavigate } from 'react-router-dom';

const AddToQueue = () => {
  const [ownerName, setOwnerName] = useState('');
  const [contact, setContact] = useState('');
  const [petCount, setPetCount] = useState('');
  const [petForms, setPetForms] = useState([]);
  const navigate = useNavigate();

  const generatePetForms = () => {
    const count = parseInt(petCount);
    if (isNaN(count) || count < 1 || count > 100) {
      alert("Please enter a valid number of pets (1–100).");
      return;
    }

    const forms = [];
    for (let i = 0; i < count; i++) {
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
    const data = {
      ownerName,
      contact,
      pets: petForms,
    };

    console.log('Submitting to queue:', data);
    alert('Added to queue!');
    // TODO: Send to backend via POST request if needed
  };

  return (
    <div>
      <header>
        <a href="/landing_page">
          <img src="/images/pawsionate-logo.png" alt="Logo" className="logo" />
        </a>

        <ul className="nav-menu">
          <li><a href="/landing_page">Home</a></li>
          <li><a href="/appointment">Appointment</a></li>
          <li><a href="/medical_records">Medical Records</a></li>
          <li><a href="/invoice">Invoice</a></li>
          <li><a href="/file_maintenance">File Maintenance</a></li>
        </ul>

        <div className="user">
          <a href="#">
            <img src="/images/user_icon.png" className="user-photo" />
          </a>
        </div>
      </header>

      <main>
        <div className="form-sections">
          {/* Owner Info */}
          <div className="info-box">
            <h2>Owner’s Information</h2>
            <input
              type="text"
              placeholder="Owner Name"
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

          {/* Ask how many pets */}
          <div className="info-box">
            <h2>How many pets?</h2>
            <input
              type="number"
              min="1"
              max="100"
              placeholder="Enter number of pets"
              value={petCount}
              onChange={(e) => setPetCount(e.target.value)}
              required
            />
            <button className="btn blue" onClick={generatePetForms}>
              Confirm
            </button>
          </div>

          {/* Generated pet forms */}
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

          <div className="form-footer">
            <button className="btn red" onClick={handleSubmit}>
              Add to Queue
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddToQueue;
