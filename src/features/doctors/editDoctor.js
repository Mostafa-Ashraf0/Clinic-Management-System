import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const editDoctor = async (formData, setSubmited, doctorId) => {
  try {
    const { error: profileError } = await supabase
      .from("profile")
      .update({
        name: formData.firstName + " " + formData.lastName,
        phone: formData.phone,
        email: formData.email,
        sex: formData.sex,
      })
      .eq("id", doctorId);

    if (profileError) throw profileError;

    const { error: doctorExtraError } = await supabase
      .from("doctor_extra")
      .update({
        specialization_id: formData.speciality_id,
      })
      .eq("id", doctorId);

    if (doctorExtraError) throw doctorExtraError;

    setSubmited(true);
    toast.success("Doctor updated successfully");
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};


export  { editDoctor };