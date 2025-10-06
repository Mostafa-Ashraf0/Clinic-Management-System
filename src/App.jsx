import './App.css';
import LoginPage from './pages/loginPage';
import HomePage from './pages/HomePage';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
