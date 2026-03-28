import supabase from "../../utils/supabase";
import { toast } from "react-toastify";


const AddAppointment = async (formData, setSubmited) => {
  try {
    const { error } = await supabase
      .from("appointment")
      .insert([
        {
          doctor_id: formData.doctor,
          patient_id: formData.patient,
          appointment_date: formData.date,
          appointment_time: formData.time,
          clinic_id: formData.clinic_id,
          type: formData.type,
        }
      ]);

    if (error) throw error;

    setSubmited(true);
    toast.success("Appointment created successfully!");
  } catch (err) {
    toast.error(err.message);
  }
};

export { AddAppointment };