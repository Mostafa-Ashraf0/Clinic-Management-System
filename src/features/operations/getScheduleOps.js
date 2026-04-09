import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchScheduleOps = async()=>{
    try{
        const {data, error} = await supabase.from('operations_schedule').select(`
            id,
            doctor_extra(
                profile(name)
            ),
            patient(name),
            clinic(name),
            medical_operations(
                name,
                operations_category(name)
            ),
            date
            `);
        if(error) throw error;
        return data;
    }catch(error){
        console.log(error);
        toast.error('something went wrong while fetching Operations');
    }
};

export {fetchScheduleOps};