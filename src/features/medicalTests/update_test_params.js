import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const updateNewTestParams = async (formData) => {
  try {
    const { error } = await supabase.rpc(
      "update_medical_test_with_params",
      {
        p_test_id: formData.test_id,
        p_test_name: formData.test_name,
        p_clinic_id: formData.clinic_id,
        p_category_id: formData.category_id,
        p_parameters: formData.parameters,
      }
    );

    if (error) throw error;

    toast.success("Medical test updated successfully");
    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    return false;
  }
};

export { updateNewTestParams };
