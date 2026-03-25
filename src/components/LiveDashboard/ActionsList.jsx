import style from "../../assets/liveDashboard/actionsList.module.css";

const ActionsList = ({display})=>{
    const status = ["scheduled","completed","cancelled"];
    return(
        <div className={style.main} style={display?{display:"flex"}:{display:"none"}}>
            {status?.map((s,index)=>
                <span key={index}>{s}</span>
            )}
        </div>
    )
};


export default ActionsList;