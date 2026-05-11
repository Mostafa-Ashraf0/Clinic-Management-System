import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const editScheduledOps = async (formData, setSubmited, id) => {
  try {
    const { error } = await supabase
      .from("operations_schedule")
      .update({
        doctor_id: formData.doctor,
        clinic_id: formData.clinic_id,
        patient_id: formData.patient,
        operation_id: formData.operation_id,
        scheduled_at: formData.schedule_at,
        date: formData.date
      })
      .eq("id", id);

    if (error) throw error;

    toast.success("Operation updated successfully");
    setSubmited(true);

    return true;

  } catch (err) {
    toast.error(err.message || "Something went wrong");
    return false;
  }
};

export { editScheduledOps };