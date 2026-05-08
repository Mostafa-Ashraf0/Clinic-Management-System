import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const getPatientCount = async(clinicId)=>{
    try{
        const { count, error } = await supabase
        .from('patient')
        .select("*", { count: "exact", head: true })
        .eq('clinic_id', clinicId)

        if (error) throw error;
        return count;
    }catch(error){
        toast.error(error.message);
        return 0;
    }
};



export {getPatientCount};