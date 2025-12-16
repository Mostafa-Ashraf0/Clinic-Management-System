import supabase from "../../utils/supabase";

const fetchDoctors = async()=>{
    const {data, error} = await supabase.from('profile').select(`
        *,
        doctor_extra(
        *,
        specialization(*))`)
        .eq('role','doctor');
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchDoctors};