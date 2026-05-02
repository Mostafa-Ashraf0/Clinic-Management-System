import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const editRecip = async (formData, setSubmited, recipId) => {
  try {
    const { error: profileError } = await supabase
      .from("profile")
      .update({
        name: formData.firstName + " " + formData.lastName,
        phone: formData.phone,
        email: formData.email,
        sex: formData.sex,
      })
      .eq("id", recipId);

    if (profileError) throw profileError;

    setSubmited(true);
    toast.success("Reciptionist updated successfully");
  } catch (err) {
    console.log(err);
    toast.error(err.message);
  }
};


export  { editRecip };