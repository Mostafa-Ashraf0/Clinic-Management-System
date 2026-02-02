import supabase from "../../utils/supabase";

const getParams = async(id)=>{
    const {data, error} = await supabase.from('medical_test_params')
    .select(`
        id,
        name,
        unit:medical_units(name),
        type,
        min_value,
        max_value
        `)
    .eq('test_id',id);
    if (error) return error;
    return data;
}

export {getParams};