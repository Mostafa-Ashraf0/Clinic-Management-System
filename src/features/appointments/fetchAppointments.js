import supabase from "../../utils/supabase";

const fetchAppointments = async()=>{
    const {data, error} = await supabase.from('appointment').select(`*`);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchAppointments};