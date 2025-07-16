function generatePetForms() {
  const count = parseInt(document.getElementById("petCount").value);
  const container = document.getElementById("petFormsContainer");
  container.innerHTML = ""; // Clear previous forms

  if (isNaN(count) || count < 1 || count > 100) {
    alert("Please enter a valid number of pets (1–100).");
    return;
  }

  for (let i = 1; i <= count; i++) {
    const petForm = document.createElement("div");
    petForm.className = "info-box";
    petForm.innerHTML = `
      <h2>Pet ${i} Information</h2>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Breed" required />
      <input type="text" placeholder="Weight (kg)" required />
      <select required>
        <option value="">Service</option>
        <option>Grooming</option>
        <option>Checkup</option>
        <option>Vaccination</option>
        <option>Surgery</option>
      </select>
    `;
    container.appendChild(petForm);
  }
}
