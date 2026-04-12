import supabase from "../utils/supabase";

const getClinicByUId = async(userId)=>{
    const { data } = await supabase
    .from("profile")
    .select("clinic_id")
    .eq("id", userId)
    .single();
    return data;
};

export {getClinicByUId};