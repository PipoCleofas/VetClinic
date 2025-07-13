// App.jsx
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ForgotPassword from './pages/ForgotPassword';
import SecurityQuestion from './pages/SecurityQuestion';
import ResetPassword from './pages/ResetPassword';
import MaxResetAttempt from './pages/MaxResetAttempt';
import HomePage from './pages/HomePage';
import ProfileManagement from './pages/ProfileManagement';
import OwnerPetInfo from './pages/OwnerPetInfo';
import Appointments from './pages/Appointments';
import EditAppointment from './pages/EditAppointment';
import MedicalRecords from './pages/MedicalRecords';
import ViewRecord from './pages/ViewRecord';
import EditRecord from './pages/EditRecord';
import DeleteRecord from './pages/DeleteRecord';
import Invoice from './pages/Invoice';
import FileMaintenance from './pages/FileMaintenance';
import ManageBreeds from './pages/ManageBreeds';
import ProductManager from './pages/ProductManager';
import ServiceCatalog from './pages/ServiceCatalog';
import UserManagement from './pages/UserManagement';
import DoNotHavePermission from './pages/DoNotHavePermission';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/security-question" element={<SecurityQuestion />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/max-reset-attempt" element={<MaxResetAttempt />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile-management" element={<ProfileManagement />} />
      <Route path="/owner-pet-info" element={<OwnerPetInfo />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/appointments/edit" element={<EditAppointment />} />
      <Route path="/medical-records" element={<MedicalRecords />} />
      <Route path="/medical-records/view" element={<ViewRecord />} />
      <Route path="/medical-records/edit" element={<EditRecord />} />
      <Route path="/medical-records/delete" element={<DeleteRecord />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/file-maintenance" element={<FileMaintenance />} />
      <Route path="/manage-breeds" element={<ManageBreeds />} />
      <Route path="/product-manager" element={<ProductManager />} />
      <Route path="/service-catalog" element={<ServiceCatalog />} />
      <Route path="/user-management" element={<UserManagement />} />
      <Route path="/no-permission" element={<DoNotHavePermission />} />
    </Routes>
  );
}

export default App;
