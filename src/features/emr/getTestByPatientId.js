import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getTestByPatientId = async (id, test_id) => {
  try {
    const { data, error } = await supabase
      .rpc('get_test_with_values', {
        p_patient_id: id,
        p_test_id: test_id
      });

    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    toast.error('something went wrong while fetching medical test');
  }
};


export {getTestByPatientId};