import "../assets/appointmentsTable.css";

const AppointmentsTable = ()=>{
    return(
        <div className="app-table d-flex flex-column">
            <div className="app-head">Appointments schdule</div>
            <table className='app-t-body'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Patient Name</th>
                        <th>Doctor</th>
                        <th>Time</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mostafa Ashraf</td>
                        <td>Osman Mohamed</td>
                        <td>8.30am - 9.00am</td>
                        <td>01028129241</td>
                        <td>Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentsTable;