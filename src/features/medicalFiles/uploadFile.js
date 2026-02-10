import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const uploadFile = async(data, patientId)=>{
    try{
        const file = data.file;
        if(!file){
            throw new Error('No file selected');
        }
        const fileExt = file.name.split('.').pop();
        const filePath = `patients/${patientId}/${Date.now()}.${fileExt}`;
        const { error: uploadError} = await supabase.storage.from('imageFiles').upload(filePath, file);
        if(uploadError){
            console.log('deleted')
            throw uploadError;
        }

        const { error: insertError} = await supabase.from('patient_files_history').insert([{
            patient_id: Number(patientId),
            url: filePath,
            notes: data.notes
        }]);
        if(insertError){
            await supabase.storage.from('imageFiles').remove([filePath]);
            throw insertError;
        }
        toast.success("File uploaded successfully");
        return true;
    }catch(error){
        toast.error(error.message);
        return false;
    }
};


export {uploadFile};