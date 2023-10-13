import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate,Link } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
                
            })
    }, []);

    
    const updatePet = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/pets/' + id, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
            .then(res => {console.log(res);navigate("/")})
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
    
    
    return (
        <div className="whole">
            <div className="top">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <div className="top">
                <h2>Edit {name}</h2>
            </div>
            <div className="form">
                <form onSubmit={updatePet}>
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
                        <input className = "submit" type="submit" value="⬆️ Edit Pet"/>
                    </div>
                    {errors.map((err, index) => <p style = {{color:'red'}}key={index}>{err}</p>)}
                </form>
            </div>
        </div>
    )
}
    
export default Update;

