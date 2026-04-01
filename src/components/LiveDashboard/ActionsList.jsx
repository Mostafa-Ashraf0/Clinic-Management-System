import style from "../../assets/liveDashboard/actionsList.module.css";
import { changeStatus } from "../../features/liveDashboard/changeStatus";
import { useDispatch } from "react-redux";
import { setActionsList } from "../../features/appointments/appointmentSlice";

const ActionsList = ({display, appointId})=>{
    const dispatch = useDispatch();
    const status = [
        {name:"scheduled",bg: "#e0e0e0", color: "#333"},
        {name:"completed",bg: "#d4edda", color: "#155724" },
        {name:"cancelled",bg: "#f8d7da", color: "#721c24"},
    ]


    const handleClick = async(status)=>{
        const res = await changeStatus(appointId, status);
        if(res){
            dispatch(setActionsList({view:false, id:null}));
        }
    }


    return(
        <div className={style.main} style={display?{display:"flex"}:{display:"none"}}>
            {status?.map((s)=>
                <span 
                style={{backgroundColor:s.bg,color:s.color}}
                key={s.name} 
                onClick={()=>handleClick(s.name)}>
                    {s.name}
                </span>
            )}
        </div>
    )
};


export default ActionsList;