import supabase from "../../utils/supabase";

const fetchAppointments = async()=>{
    const {data, error} = await supabase.from('appointment').select(`
        id,
        patient(name),
        profile(name),
        appointment_date,
        appointment_time,
        clinic(name),
        status(name)
        `);
    if(error) return error;
    console.log(data);
    return data;
};

export {fetchAppointments};