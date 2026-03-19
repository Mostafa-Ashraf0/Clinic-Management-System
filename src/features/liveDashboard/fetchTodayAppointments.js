import supabase from "../../utils/supabase";

const fetchTodayAppointments = async()=>{
    //get last date
    try{
    const { data, error } = await supabase.rpc('get_today_appointments');
    if (error) throw error;
    return data;
  } catch (err) {
    console.log(err.message);
    }
};

export {fetchTodayAppointments};