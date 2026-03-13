import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getFileCategories = async()=>{
    try{
        const {data, error} = await supabase.from('files_categories').select(`
                name,
                id
        `);
        if(error) throw error;
        return data;
        
    }catch(error){
        toast.error(error.message);
    }
};

export {getFileCategories};