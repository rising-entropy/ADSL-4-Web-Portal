import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddClassroomPage() {

    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/classrooms', theVals)
        .then((response)=>{
            alert("Added Successfully!")
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const changeHandler = (event) => {
        setTheVals({...theVals, [event.target.name]: event.target.value})
    }

    return (
        <div className='container container-fluid text-center'>
            <h3>Add Classroom</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label htmlFor="building">Building</label><br />
            <input value={theVals.building} onChange={changeHandler} type="text" name="building" id="building" required /><br /><br />

            <label htmlFor="room_number">Room Number</label><br />
            <input value={theVals.room_number} onChange={changeHandler} type="text" name="room_number" id="room_number" required /><br /><br />

            <label htmlFor="capacity">Capacity</label><br />
            <input value={theVals.capacity} onChange={changeHandler} type="text" name="capacity" id="capacity" required /><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </div>
      )
}
