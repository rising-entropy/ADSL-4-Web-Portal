import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddDepartmentPage() {

    const [theVals, setTheVals] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/departments', theVals)
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
        <h3>Add Department</h3>
        <br />
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label><br />
            <input value={theVals.name} onChange={changeHandler} type="text" name="name" id="name" required /><br /><br />
            
            <label htmlFor="building">Building</label><br />
            <input value={theVals.building} onChange={changeHandler} type="text" name="building" id="building" required /><br /><br />

            <label htmlFor="budget">Budget</label><br />
            <input value={theVals.budget} onChange={changeHandler} type="text" name="budget" id="budget" required /><br /><br />

            <button type="submit" className='btn btn-success'>Add</button>
        </form>
    </div>
  )
}
