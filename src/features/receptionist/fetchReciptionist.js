import supabase from "../../utils/supabase";

const fetchReciptionists = async()=>{
    const {data, error} = await supabase.from('profile').select(`*`).eq('role','receptionist');
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchReciptionists};