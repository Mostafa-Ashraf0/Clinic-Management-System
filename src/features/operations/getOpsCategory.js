import supabase from "../../utils/supabase";

const getOpsCategories = async(id)=>{
    const {data, error} = await supabase.from('operations_category')
    .select('id,name')
    .eq('clinic_id',id);
    if (error) return error;
    return data;
}

export {getOpsCategories};