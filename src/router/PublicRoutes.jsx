import LoginPage from './pages/loginPage';
import { Route, Routes } from 'react-router-dom';

const PublicRoutes = ()=>{
    return(
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
        </Routes>
    )
}


export default PublicRoutes;