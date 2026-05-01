import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getDataToEdit = async (appointId) => {
  try {
    const { data, error } = await supabase.from('appointment')
    .select(`
      id,
      type,
      date,
      appointment_time,
      patient:patient_id (
        id,
        name,
        phone,
        email
      ),
      doctor:doctor_id (
        id,
        name
      )
    `)
    .eq('id', appointId)
    .single();

    if (error) throw error;
    return data;

  } catch (err) {
    toast.error(err.message);
    return null;
  }
};

export { getDataToEdit };
