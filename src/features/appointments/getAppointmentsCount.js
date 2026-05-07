import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const getAppointmentCount = async(clinicId)=>{
    try{
        const { count, error } = await supabase
        .from('appointment')
        .select("*", { count: "exact", head: true })
        .eq('clinic_id', clinicId)

        if (error) throw error;
        return count;
    }catch(error){
        toast.error(error.message);
        return 0;
    }
};



export {getAppointmentCount};