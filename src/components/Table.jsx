import '../assets/table.css'

const Table = ()=>{
    return(
        <div className="table d-flex flex-column">
            <div className="head">Doctors on duty</div>
            <div className="t-body">
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Speciality</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mostafa</td>
                        <td>Doctor</td>
                        <td>Dentist</td>
                    </tr>
                    <tr>
                        <td>Mostafa</td>
                        <td>Doctor</td>
                        <td>Dentist</td>
                    </tr>
                    <tr>
                        <td>Mostafa</td>
                        <td>Doctor</td>
                        <td>Dentist</td>
                    </tr>
                    <tr>
                        <td>Mostafa</td>
                        <td>Doctor</td>
                        <td>Dentist</td>
                    </tr>
                    <tr>
                        <td>Mostafa</td>
                        <td>Doctor</td>
                        <td>Dentist</td>
                    </tr>
                    <tr>
                        <td>Mostafa</td>
                        <td>Doctor</td>
                        <td>Dentist</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Table;