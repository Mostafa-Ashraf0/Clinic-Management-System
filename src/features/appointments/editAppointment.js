import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const editAppointment = async (formData, setSubmited, appointId) => {
  const appointmentDateTime = new Date(`${formData.date}T${formData.time}`).toISOString();
  try {
    const { error } = await supabase
      .from("appointment")
      .update([
        {
          doctor_id: formData.doctor,
          patient_id: formData.patient,
          appointment_date: appointmentDateTime,
          appointment_time: formData.time,
          clinic_id: formData.clinic_id,
          type: formData.type,
          date: formData.date
        }
      ])
      .eq('id', appointId);

    if (error) throw error;

    setSubmited(true);
    toast.success("Appointment edited successfully!");
  } catch (err) {
    toast.error(err.message);
  }
};

export { editAppointment };