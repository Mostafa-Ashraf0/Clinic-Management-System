import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const addNewOperation = async (formData) => {
  try {
    const { error } = await supabase.from('medical_operations').insert([{
        name: formData.name,
        clinic_id: formData.clinic_id,
        category_id: formData.category_id
    }])

    if (error) throw error;

    toast.success("Medical Operation created successfully");
    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    return false;
  }
};

export { addNewOperation };
