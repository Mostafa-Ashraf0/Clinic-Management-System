import { Form, Row, Col } from "react-bootstrap";
import style from '../../assets/medicalTest/formParamBox.module.css';
import { icons } from "../../assets/icons";
import { useEffect, useState } from "react";
import { getUnits } from "../../features/medicalTests/getUnits";

const FormParamBox = ({paramData, setParam, removeParam, clinicId})=>{

    const [units, setUnits] = useState([]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setParam({ ...paramData, [name]: value });
    };

    useEffect(()=>{
            const displayUnits = async()=>{
                const categoriesData = await getUnits(clinicId || 0);
                setUnits(categoriesData);
            }
            displayUnits();
        },[clinicId])
      return(
        <div className={style.main}>
          <Form.Group  className={style.value}>
            <Form.Label>Value:</Form.Label>
            <Form.Control
            name="value"
            type="text"
            onChange={handleChange}
            value={paramData.value}
            required
            />
          </Form.Group>
          <Form.Group  className={style.unit}>
            <Form.Label >Unit:</Form.Label>
            <Form.Select
            aria-label="Default select example"
            name="unit"
            onChange={handleChange}
            value={paramData.unit}
            required
            >
              <option value="">Select Unit</option>
              {units.map(u=><option value={u.id} key={u.id}>{u.name}</option>)}
            </Form.Select>
          </Form.Group>
          <Form.Group  className={style.type}>
            <Form.Label >Type:</Form.Label>
            <Form.Select
            aria-label="Default select example"
            name="type"
            onChange={handleChange}
            value={paramData.type}
            required
            >
              <option value="">Select Type</option>
              <option value="Numeric">Numeric</option>
              <option value="Text">Text</option>
              <option value="Boolean">Boolean</option>
            </Form.Select>
          </Form.Group>
          <Form.Group  className={style.max}>
            <Form.Label>Max:</Form.Label>
            <Form.Control
            type="number"
            name="max"
            onChange={handleChange}
            value={paramData.max}
            required
            />
          </Form.Group>
          <Form.Group  className={style.min}>
            <Form.Label>Min:</Form.Label>
            <Form.Group className={style.finalGroup}>
                <Form.Control
                type="number"
                name="min"
                onChange={handleChange}
                value={paramData.min}
                required
              />
              <button
                type="button"
                onClick={removeParam}
                className={style.iconButton}
                aria-label="Delete parameter"
              >
              <img className={style.bin} src={icons.medicalTests.bin} alt="" />
            </button>
            </Form.Group>
          </Form.Group>
          
      </div>
    )
};

export default FormParamBox;