import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const addTestResult = async (formData) => {
  try {
    const { error } = await supabase.rpc(
      "add_new_test_record_with_params",
      {
        test_id: formData.test_id,
        patient_id: formData.patient_id,
        date: formData.date,
        notes: formData.notes,
        parameters: formData.parameters
      }
    );

    if (error) throw error;

    toast.success("Record added successfully");
    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    return false;
  }
};

export { addTestResult };
