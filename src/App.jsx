import './App.css';
import LoginPage from './pages/loginPage';
import Dashboard from './pages/Dashboard';
import Doctors from './pages/Doctors';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/doctors' element={<Doctors/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
