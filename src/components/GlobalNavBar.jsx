import {Link} from "react-router-dom";

export default function GlobalNavBar() {
    return (
        <nav className="navbar-expand-lg navbar-light bg-light my-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to="/">Doctors</Link>
                        <Link className="nav-link" to="/add-new-doctor">Add New Doctor</Link>
                        <Link className="nav-link" to="/patients">Patients</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
