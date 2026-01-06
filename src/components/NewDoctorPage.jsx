import axios from "axios";
import {useState} from "react";

export default function NewDoctorPage(props) {
    /*   const navigate = useNavigate(); */
    const {baseUrl} = props;
    const [newDoctor, setNewDoctor] = useState({
        "name": "",
        "salary": "",
        "gender": "",
        "age": "",
        "specialization": "",

    });

    async function handleSubmit(e) {
        e.preventDefault();
        let res = await axios.post(`${baseUrl}/doctors`, newDoctor)
        alert(`Welcome to the Chaitanya Hospital Dr.${newDoctor.name}.We're counting on you`)
        setNewDoctor(prev => ({
            "name": "",
            "salary": "",
            "gender": "",
            "age": "",
            "specialization": "",
        }))

        /* navigate("/", {
            replace: true
        }); */
    }

    return (
        <form className="form" onSubmit={handleSubmit}>

            {/* Name */}

            <div className="form-field">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" placeholder="Enter a name" value={newDoctor.name}
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, name: e.target.value
                       }))}/>
            </div>

            {/* Salary */}


            <div className="form-field">
                <label htmlFor="age">Age: </label>
                <input type="number" id="age" name="age" placeholder="Enter the age" value={newDoctor.age}
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, age: e.target.value
                       }))}/>
            </div>

            {/* Gender */}

            <div className="form-field">
                <span>Gender: </span>
                <label htmlFor="male">Male: </label>
                <input type="radio" id="male" name="gender" value="male" onChange={(e) => setNewDoctor((prev) => ({
                    ...prev, gender: "male"
                }))}/>
                <label htmlFor="female">Female: </label>
                <input type="radio" id="female" name="gender" value="female" onChange={(e) => setNewDoctor((prev) => ({
                    ...prev, gender: "female"
                }))}/>
                <label htmlFor="others">Others: </label>
                <input type="radio" id="others" name="gender" value="others" onChange={(e) => setNewDoctor((prev) => ({
                    ...prev, gender: "others"
                }))}/>
            </div>

            {/* Salary */}


            <div className="form-field">
                <label htmlFor="salary">Salary: </label>
                <input type="number" id="" name="" placeholder="Enter the salary" value={newDoctor.salary}
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, salary: e.target.value
                       }))}/>
            </div>

            {/* Specialization */}

            <div className="form-field">
                <label htmlFor="specialization">Specialization: </label>
                <input type="text" id="specialization" name="specialization" placeholder="Enter a specialization"
                       value={newDoctor.specialization} onChange={(e) => setNewDoctor((prev) => ({
                    ...prev, specialization: e.target.value
                }))}/>
            </div>
            <button type="submit">Add this doctor to the list</button>
        </form>
    )
}
