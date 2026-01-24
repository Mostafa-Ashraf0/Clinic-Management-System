import { Form, Row, Col } from "react-bootstrap";
import style from '../../assets/medicalTest/formParamBox.module.css';

const FormParamBox = ()=>{
    return(
        <div className={style.main}>
          <Form.Group  className={style.value}>
            <Form.Label>Value:</Form.Label>
            <Form.Control
            />
          </Form.Group>
          <Form.Group  className={style.unit}>
            <Form.Label >Unit:</Form.Label>
            <Form.Select
            />
          </Form.Group>
          <Form.Group  className={style.type}>
            <Form.Label >Type:</Form.Label>
            <Form.Select
            />
          </Form.Group>
          <Form.Group  className={style.max}>
            <Form.Label>Max value:</Form.Label>
            <Form.Control
            />
          </Form.Group>
          <Form.Group  className={style.min}>
            <Form.Label>Min value:</Form.Label>
            <Form.Control
            />
          </Form.Group>
      </div>
    )
};

export default FormParamBox;