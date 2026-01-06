export default function PatientCard(props) {
    const {patient} = props;
    const {name, weight, gender, age, email, disease, doctor, id} = patient;

    const {name: docName, specialization} = doctor;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Id: {id}</p>
            <p>Age: {age} years old</p>
            <p>Gender: {gender}</p>
            <p>weight: {weight}</p>
            <p>Disease: {disease}</p>
            <p>Treated by: Dr. {docName}, <strong>{specialization}{" "}specialist</strong></p>
        </div>
    )
}
