import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchScheduleOps = async()=>{
    try{
        const {data, error} = await supabase.from('operations_schedule').select(`
            id,
            doctor_extra(
                profile(id,name)
            ),
            patient(*),
            clinic(name),
            medical_operations(
                id,
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