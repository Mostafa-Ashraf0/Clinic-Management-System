import supabase from "../../utils/supabase";

const fetchReciptionists = async()=>{
    const {data, error} = await supabase.from('receptionist').select(`*`);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchReciptionists};