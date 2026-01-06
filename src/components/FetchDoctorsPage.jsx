import axios from "axios";
import {useEffect, useState} from "react";
import DoctorCard from "./DoctorCard";

export default function FetchDoctorsPage(props) {

    const [doctors, setDoctors] = useState([])
    // const naigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchDoctors() {
            console.log(props);
            try {
                setLoading(true);
                const res = await axios.get(`${props.baseUrl}/doctors`);
                if (res.status === 200) {
                    console.log(res.data);
                    setDoctors(res.data);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchDoctors();


    }, []); // empty array => run once on mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>List of doctors working in the Chaitanya Hospital</h1>
            {<main>
                {doctors.map(doctor => (
                    <DoctorCard key={doctor.id} doctor={doctor}/>
                ))}
            </main>}
        </div>
    );
}
