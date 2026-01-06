export default function DoctorCard(props) {
    const {doctor, handleDeleteDoctor} = props;
    const {name, salary, gender, age, specialization, id} = doctor;


    return (
        <div className="col p-2">
            <div className="card h-100">
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p className="card-subtitle">Age: {age} years old</p>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Specialization: {specialization}</p>
                    <p className="card-text">Salary: {salary}</p>
                    <button onClick={() => handleDeleteDoctor(id)}>Fire this doctor</button>
                </div>
            </div>
        </div>
    )
}
