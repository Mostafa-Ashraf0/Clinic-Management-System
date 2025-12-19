import supabase from "../../utils/supabase";
import { checkDuplicate } from '../checkDuplicate';
import { toast } from "react-toastify";

const AddRecip = async (formData,setSubmited)=>{
    try{
        //checkDuplicates
        const duplicated = await checkDuplicate(formData, 'profile','receptionist');
        if(duplicated){
            return;
        }

        // create new receptionist credentials
        const { data, error } = await supabase.auth.signUp({
            email: formData.loginEmail,
            password: formData.password,
        });

        if(error){
            toast.error("duplicated auth");
        }
        const { user } = data;

        // create new record for receptionist in profile table
        const { error: profileError } = await supabase.from("profile").insert([
            {
                id: user.id,
                role: "receptionist",
                clinic_id: formData.clinic_id,
                name: formData.firstName + " " + formData.lastName,
                phone: formData.phone,
                email: formData.email,
                sex: formData.sex
            }
        ])

        if(profileError) throw profileError;

        setSubmited(true);
        toast.success("Receptionist added successfuly");
        
    }catch(err){
        console.log(err);
    }
}


export  { AddRecip };