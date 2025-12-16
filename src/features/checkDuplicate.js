import supabase from "../utils/supabase";
import { toast } from "react-toastify";

const checkDuplicate = async(formData,tableName,role)=>{
    const { data, error } = await supabase
    .from(tableName)
    .select('email, phone')
    .eq('role',role)
    .eq('clinic_id',formData.clinic_id);
    if(error) throw error;
    const samePhone = data.find(d=>d.phone === formData.phone);
    const sameEmail = data.find(d=>d.email === formData.email);
    if(sameEmail){
        toast.error("Email duplicated");
        return true;
    }else if(samePhone){
        toast.error("Phone duplicated");
        return true;
    }
    return false;
}

export { checkDuplicate };