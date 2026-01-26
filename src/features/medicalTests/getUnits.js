import supabase from "../../utils/supabase";

const getUnits = async(id)=>{
    const {data, error} = await supabase.from('medical_units')
    .select('id,name')
    .eq('clinic_id',id);
    if (error) return error;
    return data;
}

export {getUnits};