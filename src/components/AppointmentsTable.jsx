import "../assets/appointmentsTable.css";

const AppointmentsTable = ()=>{
    return(
        <div className="app-table d-flex flex-column">
            <div className="app-head">Appointments schdule</div>
            <table className='app-t-body'>
                <thead>
                    <tr>
                        <th>Patient Name</th>
                        <th>Type</th>
                        <th>Time</th>
                        <th>Number</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mostafa</td>
                        <td>Clinic visit</td>
                        <td>8.30am - 9.00am</td>
                        <td>01028129241</td>
                        <td>Accepted</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentsTable;