import supabase from "../../utils/supabase";

const fetchDoctorsData = async(clinicId, limit, currentPage)=>{
    const start = (currentPage - 1) * limit;
    const end = start + limit - 1;
    const {data, error} = await supabase.from('profile').select(`
        *,
        doctor_extra(
        *,
        specialization(*))`)
        .eq('role','doctor')
        .eq('clinic_id',clinicId)
        .limit(limit)
        .range(start, end);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchDoctorsData};