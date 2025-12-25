import './App.css';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import AddDoctor from './pages/AddDoctor';
import Receptionists from './pages/Receptionists';
import AddReciptionist from './pages/AddReciptionist'
import Patients from './pages/Patients';
import AddPatient from './pages/AddPatient'
import Appointments from './pages/Appointments';
import AddAppointment from './pages/AddAppointment';
import Profile from './components/Profile';
import PatientDetails from './pages/PatientDetails';
import PrivateRoute from './components/PrivateRoute';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import supabase from './utils/supabase';
import { addUser, removeUser } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) dispatch(addUser(session));
      })
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        if(session){
          dispatch(addUser(session));
      }else{
        dispatch(removeUser());
      }
      });
      return () => subscription.unsubscribe()
    }, [])
  /*const dispatch = useDispatch();
  useEffect(()=>{
          const storedUser = localStorage.getItem("user");
          dispatch(addUser(JSON.parse(storedUser)));
      },[])*/
  return (
      <>
      <ToastContainer 
        position="top-right"
        autoClose={3000}      
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
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
          <Route path='/patients/:patientId' element={
            <PrivateRoute>
              <PatientDetails/>
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
        
      </BrowserRouter>
      </>
  )
}

export default App
