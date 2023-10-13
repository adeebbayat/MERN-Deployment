import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import PetForm from '../components/PetForm';

const Main = (props) => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = petId => {
        setPets(pets.filter(pet => pet._id != petId));
    }
    
    return (
        <div>
            <div className="top">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <div className="top">
                <h2>Know a pet needing a home?</h2>
            </div>
            <div className="form">
                <PetForm/>
            </div>
        </div>
    )
}
    
export default Main;

