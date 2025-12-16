import supabase from "../../utils/supabase";
import { checkDuplicate } from '../checkDuplicate';
import { toast } from "react-toastify";

const AddDoctor = async (formData,setSubmited)=>{
    try{
        //check duplicate
        const duplicated = await checkDuplicate(formData,'profile','doctor');
        if(duplicated){
            return;
        }
        // create new doctor credentials
        const { data, error } = await supabase.auth.signUp({
            email: formData.loginEmail,
            password: formData.password,
        });

        if(error){
            toast.error("duplicated auth");
        };
        const { user } = data;

        // create new record for doctor in profile table
        const { error: profileError } = await supabase.from("profile").insert([
            {
                id: user.id,
                role: "doctor",
                clinic_id: formData.clinic_id,
                name: formData.firstName + " " + formData.lastName,
                phone: formData.phone,
                email: formData.email,
                sex: formData.sex,
            }
        ])

        if(profileError) throw profileError;

        //add new record in doctor_extra table
        const { error: doctorExtraError } = await supabase.from("doctor_extra").insert([
            {
                id: user.id,
                specialization_id: formData.speciality_id
            }
        ]);
        if(doctorExtraError) throw doctorExtraError;
        setSubmited(true);
        toast.success("Doctor added successfuly")
    }catch(err){
        console.log(err);
    }
}


export  { AddDoctor };