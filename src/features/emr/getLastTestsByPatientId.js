import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getLastTestsByPatientId = async (id) => {
  try {
    const { data, error } = await supabase
      .rpc('get_latest_tests_with_values', {
        p_patient_id: id
      });

    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
    toast.error('something went wrong while fetching medical test');
  }
};


export {getLastTestsByPatientId};