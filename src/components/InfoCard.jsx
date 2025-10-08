import { Card } from "react-bootstrap";
import '../assets/card.css'
const InfoCard = ()=>{
    return(
        <Card className="card d-flex flex-row align-items-center justify-content-between">
            <Card.Body className="card-body d-flex flex-column align-items-start justify-content-center p-0">
                <Card.Title><h1 className="heading p-0 m-0">15</h1></Card.Title>
                <Card.Subtitle><span className="subtitle">Doctors</span></Card.Subtitle>
            </Card.Body>
            <div className="icon">
                <img 
                src="../assets/user.jpg" 
                alt="doc-icon" 
            />
            </div>
        </Card>
    )
}


export default InfoCard;