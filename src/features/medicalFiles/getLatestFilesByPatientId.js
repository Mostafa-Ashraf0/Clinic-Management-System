import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getLastFilesByPatientId = async (id) => {
  try {
    const { data, error } = await supabase
      .from("patient_files_history")
      .select(`
        id,
        url,
        created_at,
        notes
      `)
      .eq("patient_id", id)
      .order("created_at", { ascending: false }) 
      .limit(3); 

    if (error) throw error;
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export { getLastFilesByPatientId };