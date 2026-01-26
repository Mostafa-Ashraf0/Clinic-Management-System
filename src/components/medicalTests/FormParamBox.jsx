import { Form, Row, Col } from "react-bootstrap";
import style from '../../assets/medicalTest/formParamBox.module.css';
import { icons } from "../../assets/icons";

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
            <Form.Label>Max:</Form.Label>
            <Form.Control
            />
          </Form.Group>
          <Form.Group  className={style.min}>
            <Form.Label>Min:</Form.Label>
            <Form.Group className={style.finalGroup}>
                <Form.Control
              />
              <img className={style.bin} src={icons.medicalTests.bin} alt="Del" />
            </Form.Group>
          </Form.Group>
          
      </div>
    )
};

export default FormParamBox;