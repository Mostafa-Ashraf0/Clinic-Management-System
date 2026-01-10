import supabase from "../../utils/supabase"
import { toast } from "react-toastify";

const getTags = async(id)=>{
    const {data, error} = await supabase.from('tags').select('tag,id,priority').eq('patient_id',id);
    if(error){
        toast.error(error);
    }
    return data;
}

export {getTags};