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
        alert(`Welcome to the Chaitanya Hospital Dr.${newDoctor.name}.We're counting on your service!`)
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
        <form className="container-fluid flex flex-row" onSubmit={handleSubmit}>

            {/* Name */}

            <div className="m-3 flex flex-row">
                {/*<label className="form-label" htmlFor="name">Name: </label>*/}
                <input className="form-control" type="text" id="name" name="name" required={true}
                       placeholder="Enter a name"
                       value={newDoctor.name}
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, name: e.target.value
                       }))}/>
            </div>

            {/* Salary */}


            <div className="m-3">
                {/*<label className="form-label" htmlFor="age">Age: </label>*/}
                <input className="form-control" type="number" id="age" name="age" required={true}
                       placeholder="Enter the age"
                       value={newDoctor.age}
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, age: e.target.value
                       }))}/>
            </div>

            {/* Gender */}

            <div className="m-3">
                <span>Gender: </span>
                <label className="" htmlFor="male">Male{" "}</label>
                <input className="m-2" type="radio" id="male" name="gender" value="male"
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, gender: "male"
                       }))}/>

                <label className="" htmlFor="female">Female{" "}</label>
                <input className="m-2" type="radio" id="female" name="gender" value="female"
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, gender: "female"
                       }))}/>
                <label className="" htmlFor="others">Others{" "}</label>
                <input className="m-2" type="radio" id="others" name="gender" value="others"
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, gender: "others"
                       }))}/>
            </div>


            {/* Salary */}


            <div className="m-3">
                {/*<label className="form-label" htmlFor="salary">Salary: </label>*/}
                <input className="form-control" type="number" required={true} id="" name=""
                       placeholder="Enter the salary"
                       value={newDoctor.salary}
                       onChange={(e) => setNewDoctor((prev) => ({
                           ...prev, salary: e.target.value
                       }))}/>
            </div>

            {/* Specialization */}

            <div className="m-3">
                {/*<label className="form-label" htmlFor="specialization">Specialization: </label>*/}
                <input className="form-control" type="text" id="specialization" name="specialization"
                       placeholder="Enter a specialization"
                       value={newDoctor.specialization} onChange={(e) => setNewDoctor((prev) => ({
                    ...prev, specialization: e.target.value
                }))}/>
            </div>
            <button className="btn btn-primary" type="submit">Add this doctor to the list</button>
        </form>
    )
}
