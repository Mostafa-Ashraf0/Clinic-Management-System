import style from '../../../assets/tables/searchBox.module.css';
import { icons } from '../../../assets/icons';
import { useEffect, useState } from 'react';
import { fetchPatientsSearch } from '../../../features/appointments/fetchPatientsSearch';

const SearchBox = ()=>{
    const [searchInput, setSearchInput] = useState(null);
    const [responese, setResponse] = useState([]);

    const handleChange = (e)=>{
        const value = e.target.value;
        setSearchInput(value);
    }

    useEffect(()=>{
        if(!searchInput) return;
        if (searchInput.length < 4) return;

        const timeout = setTimeout(async () => {
            let limit = 10;
            if (searchInput.length >= 6) limit = 50;

            const data = await fetchPatientsSearch(limit, searchInput);
            setResponse(data);
            //dispatch(setSelectedPatient(data));
        }, 400);

        return () => clearTimeout(timeout);
    },[searchInput])

    useEffect(()=>{
        console.log(responese);
    },[responese])
    return(
            <div className={style.search}>
                <input type="text" placeholder="search" onChange={handleChange}/>
                <img src={icons.control.searchIcon} alt="search" />
            </div>
    )
};

export default SearchBox;