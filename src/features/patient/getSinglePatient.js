import supabase from "../../utils/supabase";

const getSinglePatient = async (id) => {
    try {
        const { data, error } = await supabase
            .from("patient")
            .select(`
                *,
                appointment(id)
            `)
            .eq("id", id)
            .single();

        if (error) {
            console.log(error);
            return null;
        }

        const { appointment, ...patientData } = data;

        return {
            ...patientData,
            visitsCount: appointment?.length || 0
        };

    } catch (error) {
        console.log(error);
        return null;
    }
};

export { getSinglePatient };