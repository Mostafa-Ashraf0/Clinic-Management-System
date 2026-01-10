import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const addNewTag = async(tagData)=>{
    const { error } = await supabase.from('tags').insert([{
        patient_id: tagData.patient_id,
        tag: tagData.tag,
        priority: tagData.priority
    }]);
    
    if(error){
        toast.error(error);
    }
    toast.success('tag added successfuly');
}


export {addNewTag};