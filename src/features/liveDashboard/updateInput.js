import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const updateInput = async(appointId, column, inputData)=>{
    try{
        const {data, error} = supabase
        .from('appointment')
        .update({ column: inputData })
        .eq('id',appointId);
        if(error) throw error;
        return data;

    }catch(error){
        toast.error(error.message);
    }
};

export {updateInput};