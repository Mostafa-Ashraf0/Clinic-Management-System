import style from '../assets/tablePagination.module.css';
import left from '../../public/left-arrow-next-svgrepo-com.svg';
import right from '../../public/right-arrow-next-svgrepo-com.svg';

const TablePagination = ()=>{
    return(
        <div className={style.main}>
            <div className={style.left}>
                <span>showing 1-20 of 134 entries</span>
            </div>
            <div className={style.right}>
                <span>
                    <img src={left} alt='prev'/>
                </span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>
                    <img src={right} alt='next'/>
                </span>
            </div>
        </div>
    )
};

export default TablePagination;