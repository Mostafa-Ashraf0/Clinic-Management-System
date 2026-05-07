import style from '../assets/tablePagination.module.css';
import left from '../../public/left-arrow-next-svgrepo-com.svg';
import right from '../../public/right-arrow-next-svgrepo-com.svg';
import { setCurrentTablePage } from '../features/appointments/appointmentSlice';
import { useSelector, useDispatch } from 'react-redux';

const TablePagination = ({limit, countData})=>{
    const dispatch = useDispatch();
    const currentPage = useSelector((state)=>state.appointment.currentTablePage)
    const start = (currentPage - 1) * limit + 1;
    const end = Math.min(limit * currentPage, countData);
    const totalPages = Math.ceil(countData / limit);
    const text = `Showing ${start}-${end} of ${countData} entries`;

    const handleClick = (page)=>{
        dispatch(setCurrentTablePage(page));
    }

    const increment = ()=>{
        if(currentPage < totalPages){
            dispatch(setCurrentTablePage(currentPage + 1));
        }
        
    }

    const decrement = ()=>{
        if(currentPage > 1){
            dispatch(setCurrentTablePage(currentPage - 1));
        }
        
    }
    return(
        <div className={style.main}>
            <div className={style.left}>
                <span>{text}</span>
            </div>
            <div className={style.right}>
                <span onClick={decrement}>
                    <img src={left} alt='prev'/>
                </span>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <span 
                    key={i} 
                    onClick={()=>handleClick(i+1)}
                    style={
                        currentPage === i + 1
                        ? { backgroundColor: "rgb(74, 144, 226)", color:"white" }
                        : {}
                    }   
                    >{i + 1}</span>
                ))}
                <span onClick={increment}>
                    <img src={right} alt='next'/>
                </span>
            </div>
        </div>
    )
};

export default TablePagination;