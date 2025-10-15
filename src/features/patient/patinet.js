import supabase from "../../utils/supabase";
const AddPatient = async (formData,setSubmited)=>{
    try{
        //add new record in patinet table
        const { error: patientError } = await supabase.from("patient").insert([
            {
                name: formData.firstName + " " + formData.lastName,
                phone: formData.phone,
                email: formData.email,
                gender: formData.gender,
            }
        ]);
        if(patientError) throw patientError;
        setSubmited(true);
        alert("patient added successfuly")
    }catch(err){
        console.log(err);
    }
}


export  { AddPatient };