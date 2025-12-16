import supabase from "../../utils/supabase";


const getSepcialization = async()=>{
    const {data, error} = await supabase.from('specialization').select('*');
    if (error) return error;
    return data
}

export {getSepcialization};