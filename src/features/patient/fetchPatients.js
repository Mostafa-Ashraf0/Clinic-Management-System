import supabase from "../../utils/supabase";

const fetchPatients = async (clinicId, limit, currentPage) => {
    const start = (currentPage - 1) * limit;
    const end = start + limit - 1;

    const { data, error } = await supabase
        .from("patient")
        .select(`
            *,
            appointment(id)
        `)
        .eq("clinic_id", clinicId)
        .range(start, end);

    if (error) return error;

    return data.map(({ appointment, ...patient }) => ({
        ...patient,
        visitsCount: appointment?.length || 0
    }));
};

export { fetchPatients };