import supabase from "../../utils/supabase";

const fetchDoctors = async()=>{
    const {data, error} = await supabase.from('doctors').select("*");
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchDoctors};