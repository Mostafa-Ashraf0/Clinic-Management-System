import supabase from "../../utils/supabase"
import { toast } from "react-toastify";

const changeStatus = async(appointId, status)=>{
    try{
        const {error} = await supabase
        .from('appointment')
        .update({ status: status })
        .eq('id',appointId);
        if(error) throw error;
        return true;
        
    }catch(error){
        toast.error(error.message);
        return false;
    }
};

export {changeStatus};