import supabase from "../../utils/supabase";
import { checkDuplicate } from '../checkDuplicate';

const AddDoctor = async (formData,setSubmited)=>{
    try{
        //check duplicate
        const duplicated = await checkDuplicate(formData,'doctors');
        if(duplicated){
            return;
        }
        // create new doctor credentials
        const { data, error } = await supabase.auth.signUp({
            email: formData.loginEmail,
            password: formData.password,
        });

        if(error){
            alert(error);
        };
        const { user } = data;

        // create new record for doctor in profile table
        const { data: profileData, error: profileError } = await supabase.from("profile").insert([
            {
                id: user.id,
                role: "doctor"
            }
        ])
        .select()
        .single();
        if(profileError) throw profileError;

        //add new record in doctors table
        const { error: doctorError } = await supabase.from("doctors").insert([
            {
                profile_id: profileData.id,
                name: formData.firstName + " " + formData.lastName,
                phone: formData.phone,
                email: formData.email,
                gender: formData.gender,
                specialization: formData.speciality
            }
        ]);
        if(doctorError) throw doctorError;
        setSubmited(true);
        alert("Doctor added successfuly")
    }catch(err){
        console.log(err);
    }
}


export  { AddDoctor };