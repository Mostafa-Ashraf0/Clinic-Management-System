import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const deleteTag = async(tagData)=>{
    const { error } = await supabase.from('tags').delete().eq('id', tagData.id)
    
    if(error){
        toast.error(error);
    }
    toast.success('tag deleted successfuly');
}


export {deleteTag};