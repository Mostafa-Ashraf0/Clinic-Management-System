import style from '../assets/medicalInfoCards.module.css';

const VitaminDCard = ()=>{
    return(
        <div className={style.info_card}>
            <span className={style.card_title}>Vitamin D</span>
            <div className={style.card_list}>
                <div className={style.card_listItem}>
                    <span className={style.card_label}>Value: </span>
                    <span className={style.card_value}>25 ng/ml</span>
                </div>
                <div className={style.card_listItem}>
                    <span className={style.card_label}>Status: </span>
                    <span className={style.card_value}>Normal</span>
                </div>
                <div className={style.card_listItem}>
                    <span className={style.card_label}>Reference Range: </span>
                    <span className={style.card_value}>30–100 ng/ml</span>
                </div>
            </div>
        </div>
    )
};

export default VitaminDCard;