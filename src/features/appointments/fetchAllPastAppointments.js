import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchAllPastAppointments = async (P_id, A_id) => {
  try {
    let query = supabase
      .from("appointment")
      .select(`
        id,
        type,
        status,
        chief_complaint,
        doctor_notes,
        date
      `)
      .eq("patient_id", P_id)
      //.or("chief_complaint.not.is.null,doctor_notes.not.is.null");

    // exclude current appointment
    if (A_id) {
      query = query.neq("id", A_id);
    }

    const { data, error } = await query
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data;

  } catch (error) {
    toast.error(error.message);
    return [];
  }
};

export { fetchAllPastAppointments };