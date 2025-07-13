import { useNavigate } from 'react-router-dom';

const useHandleRoute = () => {
  const navigate = useNavigate();

  function goLogin() {
    navigate('/login');
  }

  function goForgotPassword() {
    navigate('/forgot-password');
  }

  function goSecurityQuestion() {
    navigate('/security-question');
  }

  function goResetPassword() {
    navigate('/reset-password');
  }

  function goMaxResetAttempt() {
    navigate('/max-reset-attempt');
  }

  function goHomePage() {
    navigate('/home');
  }

  function goProfileManagement() {
    navigate('/profile-management');
  }

  function goOwnerPetInfo() {
    navigate('/owner-pet-info');
  }

  function goAppointments() {
    navigate('/appointments');
  }

  function goEditAppointment() {
    navigate('/appointments/edit');
  }

  function goMedicalRecords() {
    navigate('/medical-records');
  }

  function goViewRecord() {
    navigate('/medical-records/view');
  }

  function goEditRecord() {
    navigate('/medical-records/edit');
  }

  function goDeleteRecord() {
    navigate('/medical-records/delete');
  }

  function goInvoice() {
    navigate('/invoice');
  }

  function goFileMaintenance() {
    navigate('/file-maintenance');
  }

  function goManageBreeds() {
    navigate('/manage-breeds');
  }

  function goProductManager() {
    navigate('/product-manager');
  }

  function goServiceCatalog() {
    navigate('/service-catalog');
  }

  function goUserManagement() {
    navigate('/user-management');
  }

  function goDoNotHavePermission() {
    navigate('/no-permission');
  }

  return {
    goLogin,
    goForgotPassword,
    goSecurityQuestion,
    goResetPassword,
    goMaxResetAttempt,
    goHomePage,
    goProfileManagement,
    goOwnerPetInfo,
    goAppointments,
    goEditAppointment,
    goMedicalRecords,
    goViewRecord,
    goEditRecord,
    goDeleteRecord,
    goInvoice,
    goFileMaintenance,
    goManageBreeds,
    goProductManager,
    goServiceCatalog,
    goUserManagement,
    goDoNotHavePermission,
  };
};

export default useHandleRoute;
