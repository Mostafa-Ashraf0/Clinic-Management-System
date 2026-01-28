import supabase from '../../utils/supabase';
import { toast } from "react-toastify";

const getTestsByCategory = async()=>{
    const {data, error} = await supabase.from('medical_test').select(`id,
         name,
        category:medical_test_category(
        name)`)
    if(error){
        toast.error(error);
    }
    return data;
}

export {getTestsByCategory};