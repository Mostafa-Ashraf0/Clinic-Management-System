import { Card, Form, Button } from 'react-bootstrap';
import { AddAppointment } from '../features/appointments/appointments';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../features/appointments/fetchDoctors';
import AppointmentSearch from './AppointmentSearch';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkingTime } from '../features/liveDashboard/getWorkingTime';
import { setSlots,setActiveSlots } from '../features/appointments/appointmentSlice';
import { setLiveFormVisible } from '../features/liveAppointment/fullViewSlice';
import { setFinalPatient,setPhone,setSelectedPatient } from '../features/appointments/patientSearchSlice';
import { availableTimeSlots } from '../features/appointments/availableTimeSlots';

const AppointmentForm = ({date}) => {
      const clinicId = useSelector((state) => state.auth.clinic_id);
      const today = new Date().toISOString().split("T")[0];
      const initialDate = date || today;
      const types = ["consultation","follow_up","emergency","checkup"];
      const dispatch = useDispatch();
      
      //time slot variables
      const timeSlots = useSelector((state)=>state.appointment.timeSlots);
      const activeSlots = useSelector((state)=>state.appointment.activeSlots);
      const liveSlot = useSelector((state)=>state.appointment.liveAppoinSlot);

      const [formData, setFormData] = useState({
        doctor: '',
        patient: '',
        date: initialDate,
        time: liveSlot || '',
        clinic_id: clinicId,
        type:''
      });
      const fetchTime = async()=>{
          const data = await getWorkingTime(clinicId);
          if(data){
              dispatch(setSlots(data));
          }
      }

      
  
      useEffect(() => {
        if(!clinicId) return;
          fetchTime();
      }, [clinicId]); 

      useEffect(()=>{
        if (!formData.date || timeSlots.length === 0) return;
        const availableTime = async()=>{
        const slots = await availableTimeSlots(formData.date, timeSlots);
        if(slots){
           dispatch(setActiveSlots(slots));
        }
      }
        availableTime();
      },[formData.date, timeSlots, dispatch])


  const [submited, setSubmited] = useState(false);
  const [doctors, setDoctors] = useState([]);

  

  useEffect(() => {
    if (submited) {
      setFormData({
        doctor: '',
        patient: '',
        date: initialDate,
        time: liveSlot || '',
        clinic_id: clinicId,
        type:''
      });
      dispatch(setSelectedPatient([]));
      setSubmited(false);
    }
  }, [submited,initialDate,clinicId,dispatch,liveSlot]);

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
        time: liveSlot || '',
        clinic_id: clinicId,
        type:''
      });
      dispatch(setLiveFormVisible(false));
  };

  

  // Fetch doctors and clinics
  useEffect(() => {
    const loadDoctors = async () => {
      const doctorsData = await fetchDoctors(clinicId);
      setDoctors(doctorsData);
    };
    loadDoctors();
  }, [clinicId]);

  

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
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  disabled={!!liveSlot}
                >
                {!liveSlot && <option>select time</option>}

                {liveSlot ? (
                  <option value={liveSlot}>{liveSlot}</option>
                  ) : (
                    activeSlots?.map((s, index) => (
                      <option key={index} value={s}>
                        {s}
                      </option>
                    ))
                  )}
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
