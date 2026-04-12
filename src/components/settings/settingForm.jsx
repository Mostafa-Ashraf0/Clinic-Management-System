import { useEffect, useState } from "react";
import { getSettings } from "../../features/settings/getSettings";
import { upsertSettings } from "../../features/settings/upsertSettings";
import { useSelector } from "react-redux";

export default function SettingsForm() {
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    start_time: "",
    end_time: "",
    session_duration: "",
  });



  const fetchSettings = async () => {
    
    setLoading(true);
    const data = await getSettings(clinicId);
    if(data){
        setForm({
        start_time: data.start_time || "",
        end_time: data.end_time || "",
        session_duration: data.session_duration || "",
      });
    }
    setLoading(false);
  };

    //Fetch settings on load
  useEffect(() => {
    if(!clinicId) return;
    fetchSettings();
  }, [clinicId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Save (Insert or Update automatically)
  const handleSave = async () => {
        setLoading(true);

        const { error } = await upsertSettings(form, clinicId);

        if (!error) {
            setIsEditing(false);
        }

        setLoading(false);
        };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 max-w-md border rounded-lg space-y-4">
      <h2 className="text-xl font-bold">Clinic Settings</h2>

      {/* Start Time */}
      <div>
        <label className="block mb-1">Start Time</label>

        {isEditing ? (
          <input
            type="number"
            name="start_time"
            value={form.start_time}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        ) : (
          <p>{form.start_time || "Not set"}</p>
        )}
      </div>

      {/* End Time */}
      <div>
        <label className="block mb-1">End Time</label>

        {isEditing ? (
          <input
            type="number"
            name="end_time"
            value={form.end_time}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        ) : (
          <p>{form.end_time || "Not set"}</p>
        )}
      </div>

      {/* Session Duration */}
      <div>
        <label className="block mb-1">Session Duration (minutes)</label>

        {isEditing ? (
          <input
            type="number"
            name="session_duration"
            value={form.session_duration}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        ) : (
          <p>{form.session_duration || "Not set"}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-4 py-2"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}