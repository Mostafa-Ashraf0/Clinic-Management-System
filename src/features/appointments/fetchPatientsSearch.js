import supabase from "../../utils/supabase";

const fetchPatientsSearch = async(limit, phone)=>{
    const {data, error} = await supabase.from('patient')
    .select("*")
    .ilike('phone', `${phone}%`)
    .limit(limit);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchPatientsSearch};