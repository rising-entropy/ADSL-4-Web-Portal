import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddTimeslotPage() {

    const [theVals, setTheVals] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/timeslots', theVals)
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
            <h3>Add Timeslot</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label htmlFor="day">Day</label><br />
            <input value={theVals.day} onChange={changeHandler} type="text" name="day" id="day" required /><br /><br />

            <label htmlFor="startTime">Start Time</label><br />
            <input value={theVals.startTime} onChange={changeHandler} type="text" name="startTime" id="startTime" required /><br /><br />

            <label htmlFor="endTime">End Time</label><br />
            <input value={theVals.endTime} onChange={changeHandler} type="text" name="endTime" id="endTime" required /><br /><br />

                <button type="submit" className='btn btn-success'>Add</button>
            </form>
        </div>
      )
}