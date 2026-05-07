import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const fetchAppointments = async(clinicId, limit, currentPage)=>{
    try{
        const start = (currentPage - 1) * limit;
        const end = start + limit - 1;
        const { data, error } = await supabase
        .from('appointment')
        .select(`
            id,
            patient(name,id),
            appointment_time,
            appointment_date,
            clinic(name),
            type,
            status
        `)
        .eq('clinic_id',clinicId)
        .limit(limit)
        .range(start, end);

        if (error) throw error;
        return data;
    }catch(error){
        toast.error(error.message);
    }
};



export {fetchAppointments};