import '../assets/actionsList.css';


const ActionsList = ({actionsList})=>{
        return(
        <div className="actions-list" style={actionsList?{display:"flex"}:{display:"none"}}>
            <span>Update</span>
            <span>Delete</span>
        </div>
    )
}

export default ActionsList;