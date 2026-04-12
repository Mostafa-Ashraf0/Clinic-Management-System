import supabase from "../../utils/supabase";
import { toast } from "react-toastify";

const getWorkingTime = async (clinicId) => {
  try {
    const { error, data } = await supabase.from('working_time').select('*').eq('clinic_id',clinicId).single();
    console.log(data)
    if (error) throw error;

    let slots = [];

    if (data) {
      let start_time = Number(data.start_time) * 60;
      const end_time = Number(data.end_time) * 60;
      const duration = Number(data.session_duration);

      while (start_time < end_time) {
        const hours = Math.floor(start_time / 60);
        const minutes = start_time % 60;

        const formattedHours = hours.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");

        slots.push(`${formattedHours}:${formattedMinutes}`);
        start_time += duration;
      }
    }

    return slots;
  } catch (err) {
    toast.error(err.message);
  }
};

export { getWorkingTime };