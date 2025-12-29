import supabase from "../../utils/supabase";

const getSinglePatient = async(id)=>{
    try{
        const {data , error} = await supabase.from('patient').select(
            'name,phone,email,gender')
            .eq('id',id).single()
        if(error){
            console.log(error);
            return null;
        }
        return data;
        }
    catch(error){
        console.log(error);
        return null;
    }
    }

export {getSinglePatient};