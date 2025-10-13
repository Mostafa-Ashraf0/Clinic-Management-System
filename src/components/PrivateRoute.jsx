import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children})=>{
    const {user,initialized} = useSelector((state)=>state.auth);
    if(!initialized){
        return <div>...Loading</div>
    }
    return user?children:<Navigate to="/" replace/>

}


export default PrivateRoute;