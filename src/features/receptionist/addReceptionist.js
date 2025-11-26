import supabase from "../../utils/supabase";
import { checkDuplicate } from '../checkDuplicate';
import { toast } from "react-toastify";

const AddRecip = async (formData,setSubmited)=>{
    try{
        //checkDuplicates
        const duplicated = await checkDuplicate(formData, 'receptionist');
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
        const { data: profileData, error: profileError } = await supabase.from("profile").insert([
            {
                id: user.id,
                role: "receptionist"
            }
        ])
        .select()
        .single();
        if(profileError) throw profileError;

        //add new record in receptionist table
        const { error: recipError } = await supabase.from("receptionist").insert([
            {
                profile_id: profileData.id,
                name: formData.firstName + " " + formData.lastName,
                phone: formData.phone,
                email: formData.email,
                gender: formData.gender,
            }
        ]);
        if(recipError) throw recipError;
        setSubmited(true);
        toast.success("Receptionist added successfuly");
        
    }catch(err){
        console.log(err);
    }
}


export  { AddRecip };