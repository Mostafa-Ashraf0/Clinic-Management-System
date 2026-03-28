import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const getInput = async(appointId, column)=>{
    try{
        const {data, error} = await supabase
        .from('appointment')
        .select(column)
        .eq('id',appointId);
        if(error) throw error;
        return data?.[0]?.[column] || '';

    }catch(error){
        toast.error(error.message);
    }
};

export {getInput};