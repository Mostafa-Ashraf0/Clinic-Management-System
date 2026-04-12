import { Card, Form, Button } from 'react-bootstrap';
import { AddAppointment } from '../features/appointments/appointments';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../features/appointments/fetchDoctors';
import { getClinic } from '../features/getClinic';
import AppointmentSearch from './AppointmentSearch';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkingTime } from '../features/liveDashboard/getWorkingTime';
import { setSlots } from '../features/appointments/appointmentSlice';
import { setLiveFormVisible } from '../features/liveAppointment/fullViewSlice';
import { setFinalPatient,setPhone,setSelectedPatient } from '../features/appointments/patientSearchSlice';

const AppointmentForm = ({date}) => {
      const clinicId = useSelector((state) => state.auth.clinic_id);
      const today = new Date().toISOString().split("T")[0];
      const initialDate = date || today;
      const types = ["consultation","follow_up","emergency","checkup"];
      const dispatch = useDispatch();
      const timeSlots = useSelector((state)=>state.appointment.timeSlots);
      const fetchTime = async()=>{
          const data = await getWorkingTime(clinicId);
          if(data){
              dispatch(setSlots(data));
              console.log(data);
          }
      }
  
      useEffect(() => {
        if(!clinicId) return;
          fetchTime();
      }, [clinicId]); 

  const [submited, setSubmited] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [clinic, setClinic] = useState([]);

  const [formData, setFormData] = useState({
    doctor: '',
    patient: '',
    date: initialDate,
    time: '',
    clinic_id: '',
    type:''
  });

  useEffect(() => {
    if (submited) {
      setFormData({
        doctor: '',
        patient: '',
        date: initialDate,
        time: '',
        clinic_id:'',
        type:''
      });
      dispatch(setSelectedPatient([]));
      setSubmited(false);
    }
  }, [submited,initialDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddAppointment(formData, setSubmited);
    dispatch(setPhone(""));
    dispatch(setFinalPatient({
      name:'',
      age:'',
      email:''
    }));
    setFormData({
        doctor: '',
        patient: '',
        date: initialDate,
        time: '',
        clinic_id:'',
        type:''
      });
      dispatch(setLiveFormVisible(false));
  };

  

  // Fetch doctors and clinics
  useEffect(() => {
    const loadDoctors_clinics = async () => {
      const doctorsData = await fetchDoctors();
      setDoctors(doctorsData);
      const clinicData = await getClinic();
      setClinic(clinicData);
    };
    loadDoctors_clinics();
  }, []);

  

  return (
    <Card>
      <Card.Body
        className="d-flex flex-column align-items-center"
        style={{ height: '600px', padding: '30px' }}
      >
        <div 
        className="d-flex flex-column align-items-start"
        style={{ gap: '20px', width: '560px', color: '#384152',marginBottom:"20px"}}
        >
          <h4 className="m-0 p-0">Create Appointment</h4>
          <AppointmentSearch 
            setFormData={setFormData} 
            formData={formData} 
          />
        </div>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-start"
          style={{ gap: '20px', width: '560px', color: '#384152' }}
        >
          <Form.Group
            className="d-flex align-items-center justify-content-center"
            style={{ width: '560px', gap: '10px',marginBottom:"20px" }}
          >
            {/* Doctor */}
            <Form.Group className="d-flex flex-column align-items-start w-100" style={{ height: '64px' }}>
              <Form.Label>Doctor*</Form.Label>
              <Form.Select
                value={formData.doctor}
                name="doctor"
                onChange={handleChange}
                required
              >
                <option value="">Select doctor</option>
                {doctors.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {/* Clinic */}
            <Form.Group className="d-flex flex-column align-items-start w-100" style={{ height: '64px' }}>
              <Form.Label>Clinic*</Form.Label>
              <Form.Select
                value={formData.clinic_id}
                name="clinic_id"
                onChange={handleChange}
                required
              >
                <option value="">Select clinic</option>
                {clinic.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="d-flex flex-column align-items-start w-100" style={{ height: '64px' }}>
              <Form.Label>Type*</Form.Label>
              <Form.Select
                value={formData.type}
                name="type"
                onChange={handleChange}
                required
              >
                <option value="">Select type</option>
                {types.map((t,index) => (
                  <option key={index} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form.Group>


          {/* Date & Time */}
          <Form.Group
            className="d-flex align-items-center justify-content-center"
            style={{ width: '560px', gap: '10px' }}
          >
            <Form.Group className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}>
              <Form.Label>Time*</Form.Label>
              <Form.Select
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              >
                <option>select time</option>
                {timeSlots?.map((s,index)=><option key={index}>{s}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}>
              <Form.Label>Date*</Form.Label>
                <Form.Control
                  type={date?"text":"date"}
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  disabled={!!date}
                />
            </Form.Group>
          </Form.Group>

          <Button
            type="submit"
            className="d-flex align-items-center justify-content-center"
            style={{
              width: '97px',
              height: '45px',
              backgroundColor: '#2F9CCA',
              border: 'none',
            }}
          >
            Save
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AppointmentForm;
