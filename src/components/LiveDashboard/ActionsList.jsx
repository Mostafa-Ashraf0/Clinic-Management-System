import style from "../../assets/liveDashboard/actionsList.module.css";
import { changeStatus } from "../../features/liveDashboard/changeStatus";
import { useDispatch } from "react-redux";
import { setActionsList } from "../../features/appointments/appointmentSlice";

const ActionsList = ({display, appointId})=>{
    const dispatch = useDispatch();
    const status = ["scheduled","completed","cancelled"];

    const handleClick = async(status)=>{
        const res = await changeStatus(appointId, status);
        if(res){
            dispatch(setActionsList({view:false, id:null}));
        }
    }


    return(
        <div className={style.main} style={display?{display:"flex"}:{display:"none"}}>
            {status?.map((s)=>
                <span key={s} onClick={()=>handleClick(s)}>{s}</span>
            )}
        </div>
    )
};


export default ActionsList;