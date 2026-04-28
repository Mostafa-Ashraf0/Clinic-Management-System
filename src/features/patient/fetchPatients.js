import supabase from "../../utils/supabase";

const fetchPatients = async()=>{
    const {data, error} = await supabase.from('patient').select("*");
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchPatients};