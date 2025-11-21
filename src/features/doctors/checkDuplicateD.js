import supabase from "../../utils/supabase";

const checkDuplicateD = async(formData)=>{
    const { data, error } = await supabase.from('doctors').select('*');
    const samePhone = data.find(d=>d.phone === formData.phone);
    const sameEmail = data.find(d=>d.email === formData.email);
    if(sameEmail){
        alert("Email Duplicated");
        return true;
    }else if(samePhone){
        alert("Phone Duplicated");
        return true;
    }
    if(error) throw error;
    return false;
}


export { checkDuplicateD };