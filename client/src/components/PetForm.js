import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import "../views/style.css"
export default () => {
    
    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    
    const [errors, setErrors] = useState([]); 
    const navigate = useNavigate();

    
    const onSubmitHandler = e => {

        e.preventDefault();
        
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res=>{
            console.log(res);
            navigate("/")
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
        })
    }

    //onChange to update firstName and lastName
    return (
        <div className="form">
            <form onSubmit={onSubmitHandler}>


                <div className="outer">
                    <div className="boxNew">
                        <div className="leftColNew">
                            <p>
                                <label>Pet Name:</label><br/>
                                <input className="text" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                            </p>
                            <p>
                                <label>Pet Type:</label><br/>
                                <input className="text" type="text" onChange={(e)=>setType(e.target.value)} value={type}/>
                            </p>
                            <p>
                                <label>Pet Description:</label><br/>
                                <input className="text" type="text" onChange = {(e)=>setDescription(e.target.value)} value={description}/>
                            </p>
                        </div>
                        <div className="rightColNew">
                            <p className="skill">Skills (optional):</p>
                            <p className="skill">
                                <label>Skill 1:</label><br/>
                                <input className="text" type="text" onChange = {(e)=>setSkill1(e.target.value)} value={skill1}/>
                            </p>
                            <p className="skill">
                                <label>Skill 2:</label><br/>
                                <input className="text" type="text" onChange = {(e)=>setSkill2(e.target.value)} value={skill2}/>
                            </p>
                            <p className="skill">
                                <label>Skill 3:</label><br/>
                                <input className="text" type="text" onChange = {(e)=>setSkill3(e.target.value)} value={skill3}/>
                            </p>
                        </div>
                    </div>
                    <input className = "submit" type="submit" value="⬆️ Add Pet"/>
                </div>
                {errors.map((err, index) => <p style = {{color:'red'}}key={index}>{err}</p>)}
            </form>
        </div>

    )
}