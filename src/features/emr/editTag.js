import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const editTag = async(tagData)=>{
    const { error } = await supabase.from('tags').update({
        tag: tagData.tag,
        priority: tagData.priority
    }).eq('id', tagData.id)
    
    if(error){
        toast.error(error);
    }
    toast.success('tag edited successfuly');
}


export {editTag};