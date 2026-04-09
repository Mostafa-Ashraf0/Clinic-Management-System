import { Card, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../../features/appointments/fetchDoctors';
import { getClinic } from '../../features/getClinic';
import AppointmentSearch from '../AppointmentSearch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOpsByClinicId } from '../../features/operations/getOperationByClinicId';
import { setFinalPatient,setPhone,setSelectedPatient } from '../../features/appointments/patientSearchSlice';
import { scheduleOperation } from '../../features/operations/scheduleOperation';
import style from '../../assets/operations/scheduleForm.module.css';
import { setIsScheduleVisible } from '../../features/operations/operationsFormSlice';


const ScheduleOperationForm = ({date}) => {
        const today = new Date().toISOString().split("T")[0];
        const initialDate = date || today;
        const dispatch = useDispatch();
        const { isScheduleVisible } = useSelector((state)=>state.operationsForm);

  const [submited, setSubmited] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [clinic, setClinic] = useState([]);
  const [operation, setOperation] = useState([]);
  const [formData, setFormData] = useState({
    doctor: '',
    patient: '',
    schedule_at: today,
    clinic_id: '',
    operation_id:'',
    date: initialDate
  });

  useEffect(() => {
    if (submited) {
      setFormData({
        doctor: '',
        patient: '',
        schedule_at: today,
        clinic_id: '',
        operation_id:'',
        date: initialDate
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
    scheduleOperation(formData, setSubmited);
    dispatch(setPhone(""));
    dispatch(setFinalPatient({
      name:'',
      age:'',
      email:''
    }));
    setFormData({
        doctor: '',
        patient: '',
        schedule_at: today,
        clinic_id: '',
        operation_id:'',
        date: initialDate
      });
      dispatch(setIsScheduleVisible(false));
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

  //fetch Operations by clinicId
  useEffect(()=>{
    if (!formData.clinic_id) return;
    const loadOps = async()=>{
        const opsData = await fetchOpsByClinicId(formData.clinic_id);
        setOperation(opsData);
    }
    loadOps();
  },[formData.clinic_id])
  

  return (
    <div className={style.container} style={isScheduleVisible?{display:'flex'}:{display:'none'}}>
    <Card className={style.card} style={{border:'none',display:'flex'}}>
      <Card.Body
        className="d-flex flex-column align-items-center"
        style={{ height: '600px', padding: '30px' }}
      >
        <div 
        className="d-flex flex-column align-items-start"
        style={{ gap: '20px', width: '560px', color: '#384152',marginBottom:"20px"}}
        >
          <h4 className="m-0 p-0">Schedule Operation</h4>
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
          </Form.Group>


          {/* Date & Time */}
          <Form.Group
            className="d-flex align-items-center justify-content-center"
            style={{ width: '560px', gap: '10px' }}
          >
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
            <Form.Group className="d-flex flex-column align-items-start w-100" style={{ height: '64px' }}>
              <Form.Label>Operation*</Form.Label>
              <Form.Select
                value={formData.operation_id}
                name="operation_id"
                onChange={handleChange}
                required
              >
                <option value="">Select clinic</option>
                {operation?.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.name}
                  </option>
                ))}
              </Form.Select>
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
    </div>
  );
};

export default ScheduleOperationForm;
