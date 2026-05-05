import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchOperations = async()=>{
    try{
        const {data, error} = await supabase.from('medical_operations').select(`
            id,
            name,
            clinic(name,id),
            operations_category(id,name)
            `);
        if(error) throw error;
        return data;
    }catch(error){
        console.log(error);
        toast.error('something went wrong while fetching Operations');
    }
};

export {fetchOperations};