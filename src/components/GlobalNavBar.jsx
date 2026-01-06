import {Link} from "react-router-dom";

export default function GlobalNavBar() {
    return (
        <nav>
            <Link to="/">Doctors</Link>
            <Link to="/add-new-doctor">Add New Doctor</Link>
            <Link to="/patients">Patients</Link>
        </nav>
    )
}
