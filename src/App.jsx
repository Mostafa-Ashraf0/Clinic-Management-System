import './App.css';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import Receptionists from './pages/Receptionists';
import Patients from './pages/Patients';
import Appointments from './pages/Appointments';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
          <Route path='/receptionists' element={<Receptionists/>}/>
          <Route path='/patients' element={<Patients/>}/>
          <Route path='/appointments' element={<Appointments/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
