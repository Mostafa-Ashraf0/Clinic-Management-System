import supabase from "../../utils/supabase";

const fetchPatients = async(limit, phone)=>{
    const {data, error} = await supabase.from('patient')
    .select("*")
    .ilike('phone', `${phone}%`)
    .limit(limit);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchPatients};