import supabase from "../../utils/supabase";

const getCategories = async(id)=>{
    const {data, error} = await supabase.from('medical_test_category')
    .select('id,name')
    .eq('clinic_id',id);
    if (error) return error;
    return data;
}

export {getCategories};