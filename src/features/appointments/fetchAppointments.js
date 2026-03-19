import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const fetchAppointments = async()=>{
    try{
        const { data, error } = await supabase
        .from('appointment')
        .select(`
            id,
            patient(name),
            appointment_time,
            appointment_date,
            clinic(name),
            type,
            status
        `)

        if (error) throw error;
        return data;
    }catch(error){
        toast.error(error.message);
    }
};



export {fetchAppointments};