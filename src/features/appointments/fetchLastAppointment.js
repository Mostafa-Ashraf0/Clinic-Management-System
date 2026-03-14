import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchLastAppointment = async (P_id, A_id) => {
  try {
    let query = supabase
      .from("appointment")
      .select(`
        id,
        type,
        status,
        chief_complaint,
        doctor_notes
      `)
      .eq("patient_id", P_id);
      
    //not current appointment
    if (A_id) {
      query = query.neq("id", A_id);
    }

    const { data, error } = await query
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) throw error;
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export { fetchLastAppointment };