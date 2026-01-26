import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const addNewTestParams = async (formData, setSubmited) => {
  try {
    const { error } = await supabase.rpc(
      "insert_medical_test_with_params",
      {
        test_name: formData.test_name,
        clinic_id: formData.clinic_id,
        category_id: formData.category_id,
        parameters: formData.parameters,
      }
    );

    if (error) throw error;

    toast.success("Medical test created successfully");
    setSubmited(true);
    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    setSubmited(false);
    return false;
  }
};

export { addNewTestParams };
