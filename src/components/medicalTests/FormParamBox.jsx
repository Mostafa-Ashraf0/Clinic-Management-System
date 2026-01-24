import { Form, Row, Col } from "react-bootstrap";


const FormParamBox = ()=>{
    return(
        <div style={{ marginBottom: "20px", border: "1px solid #eee", padding: "10px", borderRadius: "8px" }}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Value</Form.Label>
            <Form.Control
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Unit</Form.Label>
            <Form.Control
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Notes</Form.Label>
            <Form.Control
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
    )
};

export default FormParamBox;