import { Card, Form, Button } from 'react-bootstrap';
import { AddAppointment } from '../features/appointments/appointments';
import { useEffect, useState } from 'react';
import { fetchDoctors } from '../features/appointments/fetchDoctors';
import AppointmentSearch from './AppointmentSearch';

const AppointmentForm = () => {
  const [submited, setSubmited] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [formData, setFormData] = useState({
    doctor: '',
    patient: '',
    date: '',
    time: '',
  });

  // Reset form after submit
  useEffect(() => {
    if (submited) {
      setFormData({
        doctor: '',
        patient: '',
        date: '',
        time: '',
      });
      setSelectedPatient([]);
      setSubmited(false);
    }
  }, [submited]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name==='doctor'?parseInt(value.trim()):value.trim(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(selectedPatient);
    AddAppointment(formData, setSubmited);
  };

  

  // Fetch doctors
  useEffect(() => {
    const loadDoctors = async () => {
      const data = await fetchDoctors();
      setDoctors(data);
    };
    loadDoctors();
  }, []);

  

  return (
    <Card>
      <Card.Body
        className="d-flex flex-column align-items-center"
        style={{ height: '600px', padding: '30px' }}
      >
        <div 
        className="d-flex flex-column align-items-start"
        style={{ gap: '20px', width: '560px', color: '#384152',marginBottom:"20px" }}
        >
          <h4 className="m-0 p-0">Create Appointment</h4>
          <AppointmentSearch 
            setFormData={setFormData} 
            formData={formData} 
            setSelectedPatient={setSelectedPatient} 
            selectedPatient={selectedPatient} 
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
            <Form.Group className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}>
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
            className="d-flex align-items-center justify-content-center"
            style={{ width: '560px', gap: '10px' }}
          >
            <Form.Group className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}>
              <Form.Label>Date*</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="d-flex flex-column align-items-start w-50" style={{ height: '64px' }}>
              <Form.Label>Time*</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
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
