import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const editPatient = async (formData, setSubmited, patientId) => {
    try {
        // update patient record
        const { error: patientError } = await supabase
            .from("patient")
            .update({
                name: formData.firstName + " " + formData.lastName,
                phone: formData.phone,
                email: formData.email,
                gender: formData.sex,
            })
            .eq("id", patientId);

        if (patientError) {
            throw patientError;
        }

        setSubmited(true);
        toast.success("patient updated successfully");

    } catch (err) {
        console.log(err);
        toast.error("error updating patient");
    }
};

export { editPatient };