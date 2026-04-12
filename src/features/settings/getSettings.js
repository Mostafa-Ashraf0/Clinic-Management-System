import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const getSettings = async(clinicId)=>{
    try{
        const { data,error } = await supabase
        .from("working_time")
        .select("*")
        .eq("clinic_id", clinicId)
        .single();
        if (error) throw error;
        return data;
    }catch(error){
        toast.error(error.message);
    }
};

export {getSettings};