import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import PetList from '../components/PetList';
import './style.css'
const Main = (props) => {
    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
            .then(res=>{
                setPets(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[]);

    
    return (
        <div>
            <div className = "top">
                <h1>Pet Shelter</h1>
                <Link to={"/pets/new"}>add a pet to the shelter</Link>
            </div>
            <h2 className ="leftText">These pets are looking for a good home</h2>
            <div className="table">
            {loaded && <PetList pets={pets}/>}
            </div>
        </div>
    )
}
    
export default Main;

