import style from '../assets/lastAppointmentDetails.module.css'

const AppointmentDetailsBox = ({data})=>{    
    return(
        <div className={style.last_appointment}>
            <span className={style.appo_title}>Appointment Details</span>
            <div className={style.info}>
                <span className={style.value}>
                    <span className={style.label}>Visit Date:</span>
                    <span className={style.date}>{data.date}</span>
                </span>
                <span className={style.value}>
                    <span className={style.label}>Vist Type:</span>
                    <span className={style.type}>{data.type}</span>
                </span>
                <span className={style.value}>
                    <span className={style.label}>Visit Status:</span>
                    <span className={style.status}>{data.status}</span>
                </span>
            </div>
            <div className={style.complaint}>
                    <span className={style.title}>Chief Complaint</span>
                    <p>{data.chief_complaint?.length >0 ?data.chief_complaint:"no complaint"}</p>
            </div>
            <div className={style.notes}>
                    <span className={style.title}>Doctor Notes</span>
                    <p>{data.doctor_notes?.length >0 ?data.doctor_notes:"no notes"}</p>
            </div>
        </div>
    )
};

export default AppointmentDetailsBox