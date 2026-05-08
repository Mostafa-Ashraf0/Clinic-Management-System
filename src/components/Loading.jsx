import style from '../assets/loading.module.css';
import { icons } from '../assets/icons';

const Loading = ()=>{
    return(
        <div className={style.main}>
            <img src={icons.public.generalLoading} alt='Loading'/>
        </div>
    )
}

export default Loading;