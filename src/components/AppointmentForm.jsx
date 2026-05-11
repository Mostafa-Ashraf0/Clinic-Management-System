import { Card, Form, Button } from 'react-bootstrap';
import { AddAppointment } from '../features/appointments/appointments';
import { editAppointment } from '../features/appointments/editAppointment';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../features/appointments/fetchDoctors';
import AppointmentSearch from './AppointmentSearch';
import { useSelector, useDispatch } from 'react-redux';
import { getWorkingTime } from '../features/liveDashboard/getWorkingTime';
import { setSlots,setActiveSlots } from '../features/appointments/appointmentSlice';
import { setLiveFormVisible } from '../features/liveAppointment/fullViewSlice';
import { setFinalPatient,setPhone,setSelectedPatient } from '../features/appointments/patientSearchSlice';
import { availableTimeSlots } from '../features/appointments/availableTimeSlots';
import style from '../assets/appointmentForm.module.css';
import { toast } from "react-toastify";

const AppointmentForm = ({date}) => {
      const clinicId = useSelector((state) => state.auth.clinic_id);
      const today = new Date().toISOString().split("T")[0];
      const initialDate = date || today;
      const types = ["consultation","follow_up","emergency","checkup"];
      const dispatch = useDispatch();

      //edit variables
      const isEdit = useSelector((state)=>state.appointment.isEdit);
      const editData = useSelector((state)=>state.appointment.editAppointmentData);
      const cleanTime = editData?.appointment_time.split(':').slice(0, 2).join(':');

      
      //time slot variables
      const timeSlots = useSelector((state)=>state.appointment.timeSlots);
      const activeSlots = useSelector((state)=>state.appointment.activeSlots);
      const liveSlot = useSelector((state)=>state.appointment.liveAppoinSlot);



      const [error, setError] = useState("");

      //initial formData
      const [formData, setFormData] = useState({
        doctor: '',
        patient: '',
        date: initialDate,
        time: liveSlot || '',
        clinic_id: clinicId,
        type:''
      });

      useEffect(() => {
      if (!isEdit) {
        setFormData({
          doctor: '',
          patient: '',
          date: initialDate,
          time: liveSlot || '',
          clinic_id: clinicId,
          type: ''
        });
      }
    }, [isEdit, initialDate, clinicId, liveSlot]);


      //Edit state formData
      useEffect(() => {
        if (isEdit && editData) {
          setFormData({
            doctor: editData.doctor?.id || '',
            patient: editData.patient?.id || '',
            date: editData.date,
            time: cleanTime,
            clinic_id: clinicId,
            type: editData.type
          });
        }
    }, [isEdit, editData, cleanTime,clinicId]);



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


  //Input Change Logic
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  //Submition Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if(error){
      toast.error(error);
      return;
    };
    if(isEdit && editData){
      editAppointment(formData, setSubmited, editData.id)
    }else{
      AddAppointment(formData, setSubmited);
    }
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
    if(!clinicId) return;
    const loadDoctors = async () => {
      const doctorsData = await fetchDoctors(clinicId);
      setDoctors(doctorsData);
      console.log("ade al data y 3m", doctorsData)
    };
    loadDoctors();
  }, [clinicId]);

  

  return (
    <Card className={`${style.card} d-flex flex-column align-items-start`}>
      <Card.Body
        className="d-flex flex-column align-items-center"
      >
        <div 
        className={`${style.head} d-flex flex-column align-items-start`}
        style={{ gap: '20px', width:"100%",color: '#384152',marginBottom:"20px"}}
        >
          <h4 className="m-0 p-0">Create Appointment</h4>
          <AppointmentSearch 
            setFormData={setFormData} 
            formData={formData} 
            setError={setError}
            error={error}
          />
        </div>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-start"
          style={{ gap: '20px',width:"100%",color: '#384152' }}
        >
          <Form.Group
            className={`${style.mainGroup} d-flex align-items-center justify-content-center`}
            style={{gap: '10px',marginBottom:"20px",width:"100%" }}
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
                {isEdit && editData ? (
                <option value={editData.doctor.id}>{editData.doctor.name}</option>
                ) : (
                  <option value="">Select type</option>
                )}

                {
                doctors &&
                (isEdit
                  ? doctors
                      .filter((d) => d.id !== editData?.doctor?.id)
                      .map((d) => (
                        <option key={d.id} value={d.id}>
                          {d.name}
                        </option>
                      ))
                  : doctors.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    )))
              }
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
                {isEdit && editData ? (
                <option value={editData.type}>{editData.type}</option>
                ) : (
                  <option value="">Select type</option>
                )}


                {types &&
                (isEdit
                  ? types
                      .filter((t) => t !== editData?.type)
                      .map((t, index) => (
                        <option key={index} value={t}>
                          {t}
                        </option>
                      ))
                  : types.map((t, index) => (
                      <option key={index} value={t}>
                        {t}
                      </option>
                    )))}
              </Form.Select>
            </Form.Group>
          </Form.Group>


          {/* Date & Time */}
          <Form.Group
            className={`${style.mainGroup} d-flex align-items-center justify-content-center`}
            style={{gap: '10px',width:"100%" }}
          >
            <Form.Group className="d-flex flex-column align-items-start w-100" style={{ height: '64px' }}>
              <Form.Label>Time*</Form.Label>
                <Form.Select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  disabled={!!liveSlot && !isEdit}
                >
                {(!liveSlot && !isEdit) && (
                  <option value="">select time</option>
                )}

                {liveSlot ? (
                <option value={liveSlot}>{liveSlot}</option>
                 ) : isEdit && editData ? (
                <>
                  <option value={cleanTime} style={{backgroundColor:"green"}}>
                    {cleanTime}
                  </option>

                  {activeSlots?.map((s, index) => (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  ))}
                </>
                ) : (
                <>
                  <option value="">select time</option>

                  {activeSlots?.map((s, index) => (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  ))}
                </>
              )}
              </Form.Select>
            </Form.Group>

            <Form.Group className="d-flex flex-column align-items-start w-100" style={{ height: '64px' }}>
              <Form.Label>Date*</Form.Label>
                <Form.Control
                  type={date && !isEdit?"text":"date"}
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  disabled={!!date && !isEdit}
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
