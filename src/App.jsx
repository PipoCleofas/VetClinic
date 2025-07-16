import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SecurityQuestion from './pages/SecurityQuestion';
import ResetPassword from './pages/ResetPassword';
import LandingPage from './pages/LandingPage';
import LoadingPage from './pages/LoadingPage';
import Appointment from './pages/Appointment';
import AddAppointment from './pages/AddAppointment';
import AddToQueue from './pages/AddToQueue';
import MedicalRecords from './pages/MedicalRecords';
import Invoice from './pages/Invoice';
import FileMaintenance from './pages/FileMaintenance';

function App() {
  return (
    <Routes>
      {/* Entry and Auth Flow */}
      <Route path="/" element={<LoadingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/security-question" element={<SecurityQuestion />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Main Application Pages */}
      <Route path="/landing_page" element={<LandingPage />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/add-appointment" element={<AddAppointment />} />
      <Route path="/add-to-queue" element={<AddToQueue />} />
      <Route path="/medical_records" element={<MedicalRecords />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/file_maintenance" element={<FileMaintenance />} />
    </Routes>
  );
}

export default App;
