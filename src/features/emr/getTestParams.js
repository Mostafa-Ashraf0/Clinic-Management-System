import supabase from '../../utils/supabase';
import { toast } from "react-toastify";

const getTestParams = async(testId)=>{
    const {data, error} = await supabase.from('medical_test_params').select(`id,
         name,
         type,
         min_value,
         max_value,
        unit:medical_units(
        name)`).eq('test_id',testId)
    if(error){
        toast.error(error);
    }
    return data;
}

export {getTestParams};