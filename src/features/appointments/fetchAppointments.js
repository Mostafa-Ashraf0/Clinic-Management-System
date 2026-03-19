import supabase from "../../utils/supabase";

const fetchAppointments = async()=>{
    //get last date
    try{
    const { data, error } = await supabase.rpc('get_today_appointments');
    if (error) throw error;
    return data;
  } catch (err) {
    console.log(err.message);
    }
};

export {fetchAppointments};