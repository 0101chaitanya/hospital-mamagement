import axios from "axios";
import {useEffect, useState} from "react";
import PatientCard from "./PatientCard";

// import DoctorCard from "./DoctorCard";

export function FetchPatientsPage(props) {
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchPatients();

    }, []);

    async function fetchPatients() {
        try {
            setLoading(true);
            const res = await axios.get(`${props.baseUrl}/patients`);
            if (res.status === 200) {
                let data = res.data;
                setPatients(data);
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<div className="container-fluid">
            <h1 className="m-1 p-1 text-center">List of admitted patients</h1>
            {<main className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-1 p-2">
                {patients.map(patient => (
                    <PatientCard key={patient.id} patient={patient}/>
                ))}
            </main>}
        </div>
    );
}
