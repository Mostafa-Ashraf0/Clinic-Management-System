import { Route, Routes } from "react-router-dom";
import LiveDashboard from '../pages/LiveDashboard';
import LiveAppointment from '../pages/LiveAppointment';
import Dashboard from '../pages/Dashboard';
import Doctors from '../pages/Doctors';
import AddDoctor from '../pages/AddDoctor';
import Receptionists from '../pages/Receptionists';
import AddReciptionist from '../pages/AddReciptionist'
import Patients from '../pages/Patients';
import AddPatient from '../pages/AddPatient'
import Appointments from '../pages/Appointments';
import AddAppointment from '../pages/AddAppointment';
import Profile from '../components/Profile';
import PatientEmrGeneral from '../pages/PatientEmrGeneral';
import PatientEmrMedical from '../pages/PatientEmrMedical';
import PatientEmrFiles from '../pages/PatientEmrFiles';
import MedicalTests from '../pages/MedicalTests';
import MedicalOperations from '../pages/MedicalOperations';
import Settings from '../pages/Settings';
import PrivateRoute from "./PrivateRoute";

const PrivateRoutes = ()=>{
    return(
        <Routes>
            <Route path='/liveDashboard' element={
            <PrivateRoute>
              <LiveDashboard/>
            </PrivateRoute>
          }/>
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard/>
            </PrivateRoute>
          }/>
          <Route path='/doctors' element={
            <PrivateRoute>
              <Doctors/>
            </PrivateRoute>
          }/>
          <Route path='/receptionists' element={
            <PrivateRoute>
              <Receptionists/>
            </PrivateRoute>
          }/>
          <Route path='/patients' element={
            <PrivateRoute>
              <Patients/>
            </PrivateRoute>
          }/>
          <Route path='/medicalTests' element={
            <PrivateRoute>
              <MedicalTests/>
            </PrivateRoute>
          }/>
          <Route path='/operations' element={
            <PrivateRoute>
              <MedicalOperations/>
            </PrivateRoute>
          }/>
          <Route path='/settings' element={
            <PrivateRoute>
              <Settings/>
            </PrivateRoute>
          }/>
          <Route path='/patients/:patientId/general' element={
            <PrivateRoute>
              <PatientEmrGeneral/>
            </PrivateRoute>
          }/>
          <Route path='/patients/:patientId/medical' element={
            <PrivateRoute>
              <PatientEmrMedical/>
            </PrivateRoute>
          }/>
          <Route path='/patients/:patientId/files' element={
            <PrivateRoute>
              <PatientEmrFiles/>
            </PrivateRoute>
          }/>
          <Route path='liveDashboard/liveAppointment/:appointmentId' element={
            <PrivateRoute>
              <LiveAppointment/>
            </PrivateRoute>
          }/>
          <Route path='/appointments' element={
            <PrivateRoute>
              <Appointments/>
            </PrivateRoute>
          }/>
          <Route path='/appointments/addAppointment' element={
            <PrivateRoute>
              <AddAppointment/>
            </PrivateRoute>
          }/>
          <Route path='/doctors/addDoctor' element={
            <PrivateRoute>
              <AddDoctor/>
            </PrivateRoute>
          }/>
          <Route path='/doctors/Profile/:doctorId' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path='/receptionists/addreceptionists' element={
            <PrivateRoute>
              <AddReciptionist/>
            </PrivateRoute>
          }/>
          <Route path='/receptionists/Profile/:receptionistId' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path='/patients/addpatient' element={
            <PrivateRoute>
              <AddPatient/>
            </PrivateRoute>
          }/>
        </Routes>
    )
}


export default PrivateRoutes;