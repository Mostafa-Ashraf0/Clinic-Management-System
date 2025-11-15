import { Card } from "react-bootstrap";
import '../assets/card.css';
const InfoCard = ({name,icon,data})=>{
    return(
        <Card className="info-card d-flex flex-row align-items-center justify-content-between">
            <Card.Body className="info-card-body d-flex flex-column align-items-start justify-content-center p-0">
                <Card.Title><h1 className="heading p-0 m-0">{data}</h1></Card.Title>
                <Card.Subtitle><span className="subtitle">{name}</span></Card.Subtitle>
            </Card.Body>
            <div className="icon">
                <img 
                src={icon} 
                alt="doc-icon" 
            />
            </div>
        </Card>
    )
}


export default InfoCard;