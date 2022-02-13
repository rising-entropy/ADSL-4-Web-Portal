import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddStudentPage() {

    const [theVals, setTheVals] = useState({})
    const [depts, setDepts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/departments')
        .then((response)=>{
            if(response.status === 200)
            {
                setDepts(response.data);
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/students', theVals)
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
        <h3>Add Student</h3>
        <br />
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name</label><br />
            <input value={theVals.name} onChange={changeHandler} type="text" name="name" id="name" required /><br /><br />
            
            <label htmlFor="credits">Credits</label><br />
            <input value={theVals.credits} onChange={changeHandler} type="text" name="credits" id="credits" required /><br /><br />

            <label htmlFor="department">Department</label><br />
            <select name="department" id="department" onChange={changeHandler}>
                {depts.map((ele, ind)=><option key={ind} value={ele.id}>{ele.name}</option>)}
            </select><br /><br />

            <button type="submit" className='btn btn-success'>Add</button>
        </form>
    </div>
  )
}
