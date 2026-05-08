import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const getDoctorCount = async(clinicId)=>{
    try{
        const { count, error } = await supabase
        .from('profile')
        .select("*", { count: "exact", head: true })
        .eq('role','doctor')
        .eq('clinic_id', clinicId)

        if (error) throw error;
        return count;
    }catch(error){
        toast.error(error.message);
        return 0;
    }
};



export {getDoctorCount};