import supabase from "../utils/supabase";

const getClinic = async()=>{
    const {data, error} = await supabase.from('clinic').select('*');
    if (error) return error;
    return data;
}

export {getClinic};