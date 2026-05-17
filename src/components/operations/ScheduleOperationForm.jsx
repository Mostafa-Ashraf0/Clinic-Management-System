import { Card, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../../features/appointments/fetchDoctors';
import AppointmentSearch from '../AppointmentSearch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOpsByClinicId } from '../../features/operations/getOperationByClinicId';
import { setFinalPatient,setPhone,setSelectedPatient } from '../../features/appointments/patientSearchSlice';
import { scheduleOperation } from '../../features/operations/scheduleOperation';
import style from '../../assets/operations/scheduleForm.module.css';
import { editScheduledOps } from '../../features/operations/editScheduledOps';
import { setIsScheduleVisible, setIsEditSchedule, setGeneralLoading } from '../../features/operations/operationsFormSlice';

const ScheduleOperationForm = ({onTestAdded,date}) => {
    const clinicId = useSelector((state) => state.auth.clinic_id);
    const today = new Date().toISOString().split("T")[0];
    const initialDate = date||today;
    const dispatch = useDispatch();
    const loading = useSelector((state)=> state.operationsForm.generalLoading);



    const [error, setError] = useState(null);
    const [submited, setSubmited] = useState(false);
    const [doctors, setDoctors] = useState([]);
    const [operation, setOperation] = useState([]);
    const [formData, setFormData] = useState({
      doctor: '',
      patient: '',
      schedule_at: today,
      clinic_id: clinicId,
      operation_id:'',
      date: initialDate
    });

    //edit variables
    const isEdit = useSelector((state)=>state.operationsForm.isEditSchedule);
    const editData = useSelector((state)=>state.operationsForm.editDataSchedule);

    //edit state
    useEffect(()=>{
        console.log(editData)
        if(isEdit && editData){
            setFormData({
              id: editData.id,
              doctor: editData.doctor_extra.id,
              patient: editData.patient.id,
              operation_id: editData.medical_operations.id,
              date: editData.date
            })
        }
    },[isEdit, editData])


    useEffect(() => {
      if (submited) {
        setFormData({
          doctor: '',
          patient: '',
          schedule_at: today,
          clinic_id: clinicId,
          operation_id:'',
          date: initialDate
        });
        dispatch(setSelectedPatient([]));
        setSubmited(false);
      }
    }, [submited,initialDate,clinicId,today,dispatch]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value.trim(),
      }));
    };

    const handleSubmit = async(e) => {
      e.preventDefault();
      let success = false;
      dispatch(setGeneralLoading(true));
      if(isEdit && editData){
          success = await editScheduledOps(formData,setSubmited,editData.id)
      }else{
          success = await scheduleOperation(formData, setSubmited)
      }
      if(success){
      dispatch(setPhone(""));
      dispatch(setGeneralLoading(false));
      dispatch(setFinalPatient({
        name:'',
        age:'',
        email:''
      }));
      setFormData({
          doctor: '',
          patient: '',
          schedule_at: today,
          clinic_id: clinicId,
          operation_id:'',
          date: initialDate
        });
        dispatch(setIsScheduleVisible(false));
        await onTestAdded();
    };
  }



    //cancel
    const handleCancel = () => {
      dispatch(setIsScheduleVisible(false));
      dispatch(setIsEditSchedule(false));
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
          clinic_id: clinicId,
          operation_id:'',
          date: initialDate
      });
    }

    

    // Fetch doctors and clinics
    useEffect(() => {
      if(!clinicId) return;
      const loadDoctors_clinics = async () => {
        const doctorsData = await fetchDoctors(clinicId);
        setDoctors(doctorsData);
      };
      loadDoctors_clinics();
    }, [clinicId]);

    useEffect(()=>{
      if (!clinicId) return;
      const loadOps = async()=>{
          const opsData = await fetchOpsByClinicId(clinicId);
          setOperation(opsData);
      }
      loadOps();
    },[clinicId])
  

  return (
    <div className={style.container}>
    <Card className={style.card}>
      <Card.Body
        className={`${style.cardBody} d-flex flex-column align-items-center`}
      >
        <div 
        className={`${style.head} d-flex flex-column align-items-start`}
        >
          <h4 className="m-0 p-0">{isEdit?"Edit Operation":"Schedule Operation"}</h4>
          <AppointmentSearch 
            setFormData={setFormData}
            error={error}
            setError={setError}
          />
        </div>
        <Form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-start w-100 gap-4"
        >
          <Form.Group
            className="d-flex align-items-center justify-content-center w-100"
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
          </Form.Group>


          {/* Date & Time */}
          <Form.Group
            className="d-flex align-items-center justify-content-center w-100 gap-2"
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

          <div className={style.submitBox}>
              <Button onClick={handleCancel} className={style.cancel}>Cancel</Button>
              <Button 
                type='submit'
                disabled={loading}
              >
                {
                isEdit?
                (loading?"Saving":"Save")
                :(loading?"Creating":"Create")
                }
              </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ScheduleOperationForm;
