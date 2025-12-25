import style from '../assets/EMR.module.css';


const EMR = ()=>{
    return(
        <div className={style.emr}>
            <div className={style.info}>
            <div className={style.general_info}>
                <span className={style.title}>General Information</span>
                <span className={style.name}>Mostafa Ashraf</span>
                <div className={style.meta_data}>
                    <div className={style.sex_age}>
                        <span className={style.value}>
                            <span className={style.label}>Sex:</span>
                            Male
                        </span>
                        <span className={style.value}>
                            <span className={style.label}>Age:</span>
                            25
                        </span>
                        <span className={style.value}>
                            <span className={style.label}>Sessions:</span>
                            20
                        </span>
                        
                    </div>
                    <div className={style.contact}>
                        <span className={style.value}>
                            <span className={style.label}>Email:</span> 
                            mostafaashrof158@gmail.com
                        </span>
                        <span className={style.value}>
                            <span className={style.label}>Phone</span>
                            : 01225220568
                        </span>
                        <span className={style.value}>
                            <span className={style.label}>Phone_2</span>
                            : 01225220568
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.medical_info}>
                <span className={style.title}>Medical Information</span>
                <div className={style.info_cards}>
                    <div className={style.info_card}>
                        <span className={style.card_label}>Blood Type</span>
                        <span className={style.card_value}>A+</span>
                    </div>
                    <div className={style.info_card}>
                        <span className={style.card_label}>Weigth</span>
                        <span className={style.card_value}>110 Kg</span>
                    </div>
                    <div className={style.info_card}>
                        <span className={style.card_label}>Heigth</span>
                        <span className={style.card_value}>181 Cm</span>
                    </div>
                </div>
            </div>
            </div>
            <div className={style.complaint_tags}>
                <span className={style.complaint}>Main Complaint</span>
                <div className={style.tags_box}>
                    <span className={style.tag}>Diapetes</span>
                    <span className={style.tag}>high pressure</span>
                    <span className={style.tag}>heart desease</span>
                </div>
            </div>
            <div className={style.last_appointment}>
                <span className={style.appo_title}>Latest Appointment Details</span>
            </div>
        </div>
    )
};

export default EMR;