import './App.css';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Receptionists from './pages/Receptionists';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import PrivateRoute from './components/PrivateRoute';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
function App() {

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
        </Routes>
      </BrowserRouter>
  )
}

export default App
