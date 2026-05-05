import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const editOperation = async (formData, operationId) => {
  try {
    const { error } = await supabase.from('medical_operations').update({
        name: formData.name,
        category_id: formData.category_id
    }).eq('id', operationId);

    if (error) throw error;

    toast.success("Medical Operation Updated successfully");
    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    return false;
  }
};

export { editOperation };
