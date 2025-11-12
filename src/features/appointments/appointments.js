import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const AddAppointment = async (formData, setSubmited) => {
  try {
    const { error } = await supabase.rpc("add_appointment", {
      p_doctor_id: formData.doctor,
      p_patient_id: formData.patient,
      p_date: formData.date,
      p_time: formData.time,
    });

    if (error) throw error;

    setSubmited(true);
    toast.success("Appointment created successfully!");
  } catch (err) {
    toast.error(err.message);
  }
};

export { AddAppointment };
