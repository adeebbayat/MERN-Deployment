import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link,useNavigate} from "react-router-dom";
import './style.css'

const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, []);
    
    const deletePet = (petId) =>{
        axios.delete('http://localhost:8000/api/pets/' + petId)
        .then(res => {
            navigate("/")
        })
        .catch(err => console.log(err));
        
    }

    return (
        <div>
            <div className="top">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <div className="top">
                <h2>Details about: {pet.name}</h2>
                <button onClick = {() => deletePet(pet._id)} className="button">🏠 Adopt {pet.name}</button>
            </div>
            <div className="box">
                <div className="leftCol">
                    <h3>Pet type:</h3>
                    <h3>Description:</h3>
                    <h3>Skills:</h3>
                </div>
                <div className="rightCol">
                    <h4>{pet.type}</h4>
                    <h4>{pet.description}</h4>
                    <h4>{pet.skill1}</h4>
                    <h4>{pet.skill2}</h4>
                    <h4>{pet.skill3}</h4>
                </div>
            </div>
        </div>

    )
}
    
export default Detail;
