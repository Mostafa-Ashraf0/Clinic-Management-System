import supabase from "../../utils/supabase";

export const upsertSettings = async (form, clinicId) => {
  const { error, data } = await supabase
    .from("working_time")
    .upsert(
      {
        clinic_id: clinicId,
        start_time: form.start_time,
        end_time: form.end_time,
        session_duration: Number(form.session_duration),
      },
      {
        onConflict: "clinic_id",
      }
    );

  return { error, data };
};