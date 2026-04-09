import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const scheduleOperation = async (formData,setSubmited) => {
  try {
    const { error } = await supabase.from('operations_schedule').insert([{
        doctor_id: formData.doctor,
        clinic_id: formData.clinic_id,
        patient_id: formData.patient,
        operation_id: formData.operation_id,
        scheduled_at: formData.schedule_at,
        date: formData.date
    }])

    if (error) throw error;

    toast.success("Operation scheduled successfully");
    setSubmited(true);
    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    return false;
  }
};

export { scheduleOperation };
