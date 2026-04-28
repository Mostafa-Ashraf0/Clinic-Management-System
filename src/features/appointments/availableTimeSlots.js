import supabase from "../../utils/supabase"

const availableTimeSlots = async (date, timeSlots) => {
  const { data, error } = await supabase
    .from('appointment')
    .select('appointment_time')
    .eq('date', date);

  if (error) {
    console.error(error);
    return [];
  }

  const bookedTimes = data.map(
    d => d.appointment_time.slice(0, 5)
  );


  const availableSlots = timeSlots.filter(
    slot => !bookedTimes.includes(slot)
  );

  return availableSlots;
};

export {availableTimeSlots}

