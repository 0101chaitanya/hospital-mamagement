import axios from "axios";
import {useEffect, useState} from "react";
import DoctorCard from "./DoctorCard";

export default function FetchDoctorsPage(props) {
    let {baseUrl} = props;
    const [doctors, setDoctors] = useState([])
    // const naigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {


        fetchDoctors();


    }, []); // empty array => run once on mount
    async function fetchDoctors() {
        console.log(props);
        try {
            setLoading(true);
            const res = await axios.get(`${baseUrl}/doctors`);
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

    async function deleteDoctor(id) {

        console.log(id)
        let res = await axios.delete(`${baseUrl}/doctors/${id}`);
        fetchDoctors()
        console.log(res)
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container-fluid">
            <h1 className="m-1 p-1 text-center">List of doctors working in the Chaitanya Hospital</h1>
            {<main className="row row-cols-1 row-cols-2 g-4">
                {doctors.map(doctor => (
                    <DoctorCard handleDeleteDoctor={deleteDoctor} key={doctor.id} doctor={doctor}/>
                ))}
            </main>}
        </div>
    );
}
