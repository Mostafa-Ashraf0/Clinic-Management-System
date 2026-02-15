import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getFilesByPatientId = async(id)=>{
    try{
        const {error, data} = await supabase.from('patient_files_history').select(`
            id,
            url,
            created_at,
            notes
            `).eq('patient_id',id)
        if(error) throw error;
        return data
    }catch(error){
        toast.error(error.message)
    }
}

export {getFilesByPatientId};