export default function PatientCard(props) {
    const {patient} = props;
    const {name, weight, gender, age, email, disease, doctor, id} = patient;

    const {name: docName, specialization} = doctor;
    return (
        <div className="col p-2">
            <div className="card h-100">
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="card-subtitle">Email: {email}</p>
                    <p className="card-text">Age: {age} years old</p>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">weight: {weight}</p>
                    <p className="card-text">Disease: {disease}</p>
                    <p className="card-text">Treated by: Dr. {docName}, <strong>{specialization}{" "}specialist</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
