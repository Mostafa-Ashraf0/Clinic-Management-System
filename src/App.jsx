import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './router/PrivateRoutes';
import PublicRoutes from './router/publicRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import supabase from './utils/supabase';
import { addUser, removeUser,setClinicId } from './features/auth/authSlice';
import { getClinicByUId } from './features/getClinicByUserId';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session){
          console.log(session.user.id)
          dispatch(addUser(session));
          const setClinic = async()=>{
            const data = await getClinicByUId(session.user.id);
            if (data?.clinic_id) {
              dispatch(setClinicId(data.clinic_id));
              console.log(data.clinic_id);
            }
          }
          if(session.user.id) setClinic();
        }
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
          <PublicRoutes/>
          <PrivateRoutes/>
      </BrowserRouter>
      </>
  )
}

export default App
