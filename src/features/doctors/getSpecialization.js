import supabase from "../../utils/supabase";


const getSepcialization = async(clinicId)=>{
    const {data, error} = await supabase.from('specialization').select('*').eq('clinic_id', clinicId);
    if (error) return error;
    return data
}

export {getSepcialization};