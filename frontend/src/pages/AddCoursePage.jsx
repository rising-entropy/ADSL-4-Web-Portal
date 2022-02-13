import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function AddCoursePage() {

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
        axios.post('http://localhost:8000/api/courses', theVals)
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
            <h3>Add Course</h3>
            <br />
            <form onSubmit={submitHandler}>
            <label htmlFor="title">Title</label><br />
            <input value={theVals.title} onChange={changeHandler} type="text" name="title" id="title" required /><br /><br />
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
