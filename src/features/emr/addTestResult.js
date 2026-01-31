import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const addTestResult = async(data)=>{
    const { error } = await supabase.from('test_result').insert([{
        
    }]);
    
    if(error){
        toast.error(error);
    }
    toast.success('tag added successfuly');
}


export {addTestResult};