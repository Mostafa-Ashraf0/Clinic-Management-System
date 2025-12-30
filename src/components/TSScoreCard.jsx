import style from '../assets/medicalInfoCards.module.css';

const TSScoreCard = ()=>{
    return(
        <div className={style.info_card}>
            <div className={style.card_items}>
                <div className={style.card_item}>
                    <span className={style.card_label}>T-Score</span>
                    <span className={style.card_value}>A+</span>
                </div>
                <div className={style.card_item}>
                    <span className={style.card_label}>Z-Score</span>
                    <span className={style.card_value}>A+</span>
                </div>
                <div className={style.card_item}>
                    <span className={style.card_label}>Diagnosis</span>
                    <span className={style.card_value}>A+</span>
                </div>
            </div>
        </div>
    )
}


export default TSScoreCard;