import supabase from "../utils/supabase";
import { toast } from "react-toastify";

const checkDuplicate = async(formData,tableName)=>{
    const { data, error } = await supabase.from(tableName).select('*');
    const samePhone = data.find(d=>d.phone === formData.phone);
    const sameEmail = data.find(d=>d.email === formData.email);
    if(sameEmail){
        toast.error("Email duplicated");
        return true;
    }else if(samePhone){
        toast.error("Phone duplicated");
        return true;
    }
    if(error) throw error;
    return false;
}


export { checkDuplicate };