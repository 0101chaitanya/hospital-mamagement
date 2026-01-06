

import axios from "axios";
import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
// import DoctorCard from "./DoctorCard";

export default function FetchPatientsPage(props) {
    const [patients, setPatients] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchPatients = async () => {
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
        };

        fetchPatients();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<div className="container">
        <h1>List of admitted patients</h1>
        {<main>
            {patients.map(patient => (
                <PatientCard key={patient.id} patient={patient} />
            ))}
        </main>}
    </div>
    );
}




