import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const fetchAppointmentById = async (appointId) => {
  try {
    const { data, error } = await supabase.from('appointment')
    .select('*')
    .eq('id',appointId)
    .single();

    if (error) throw error;
    return data;

  } catch (err) {
    toast.error(err.message);
    return null;
  }
};

export { fetchAppointmentById };
