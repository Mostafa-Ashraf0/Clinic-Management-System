import supabase from "../../utils/supabase";

const fetchDoctors = async(clinicId)=>{
    const {data, error} = await supabase.from('profile').select(`
        *,
        doctor_extra(
        *,
        specialization(*))`)
        .eq('role','doctor')
        .eq('clinic_id',clinicId);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchDoctors};