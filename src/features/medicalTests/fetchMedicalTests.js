import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchMedicalTest = async()=>{
    try{
        const {data, error} = await supabase.from('medical_test').select(`
            id,
            name,
            clinic(name),
            category:medical_test_category(name),
            medical_test_params(count)
            `);
        if(error) throw error;
        return data;
    }catch(error){
        console.log(error);
        toast.error('something went wrong while fetching medical test');
    }
};

export {fetchMedicalTest};