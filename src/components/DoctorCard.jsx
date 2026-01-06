export default function DoctorCard(props) {
    const {doctor} = props;
    const {name, salary, gender, age, specialization, id} = doctor;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <p>Age: {age} years old</p>
            <p>Gender: {gender}</p>
            <p>Specialization: {specialization}</p>
            <p>Salary: {salary}</p>
        </div>
    )
}
