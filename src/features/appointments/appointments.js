import supabase from "../../utils/supabase";

const AddAppointment = async(formData, setSubmited)=>{
    try{
        const { error : appointmentError } = await supabase.from("appointment").insert([
            {
                doctor_id: formData.doctor,
                patient_id: formData.patient,
                appointment_date: formData.date,
                appointment_time: formData.time,
                status: "pending",
            }
        ])
        if(appointmentError) throw appointmentError;
        setSubmited(true);
        alert("appointment created");
    }catch(err){
        console.log(err);
    }
};

export {AddAppointment};