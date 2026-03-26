import style from "../../assets/liveDashboard/actionsList.module.css";
import { changeStatus } from "../../features/liveDashboard/changeStatus";

const ActionsList = ({display, appointId})=>{
    const status = ["scheduled","completed","cancelled"];

    const handleClick = (status)=>{
        changeStatus(appointId, status);
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