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
import PrivateRoute from './components/PrivateRoute';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './features/auth/authSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
          const storedUser = localStorage.getItem("user");
          dispatch(addUser(JSON.parse(storedUser)));
      },[])
  return (
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
          <Route path='/appointments' element={
            <PrivateRoute>
              <Appointments/>
            </PrivateRoute>
          }/>
          <Route path='/doctors/addDoctor' element={
            <PrivateRoute>
              <AddDoctor/>
            </PrivateRoute>
          }/>
          <Route path='/receptionists/addreceptionists' element={
            <PrivateRoute>
              <AddReciptionist/>
            </PrivateRoute>
          }/>
          <Route path='/patients/addpatient' element={
            <PrivateRoute>
              <AddPatient/>
            </PrivateRoute>
          }/>
        </Routes>
        
      </BrowserRouter>
  )
}

export default App
