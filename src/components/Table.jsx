import '../assets/table.css'

const Table = ({title,data,role})=>{
    return(
        <div className="table d-flex flex-column">
            <div className="head">{title}</div>
            <div className="t-body">
                <table>
                <thead>
                    {role==="doctor" &&(
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Specialization</th>
                        </tr>
                    )}
                    {role==="receptionist" && (
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    )}
                    {role==="patient" && (
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    )}
                </thead>
                <tbody>
                    {role==="doctor" &&(
                        data.map(d=>(
                            <tr>
                                <td>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                                <td>{d.specialization}</td>
                            </tr>
                        ))
                    )}
                    {role==="receptionist" &&(
                        data.map(d=>(
                            <tr>
                                <td>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.email}</td>
                            </tr>
                        ))
                    )}
                    {role==="patient" &&(
                        data.map(d=>(
                            <tr>
                                <td>{d.name}</td>
                                <td>{d.phone}</td>
                                <td>{d.email || "null"}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Table;