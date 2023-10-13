import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../views/style.css'
const PetList = (props) => {
    props.pets.sort(function(a, b) {
        var textA = a.type.toUpperCase();
        var textB = b.type.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return (
        <div className="main">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
            {props.pets.map((pet,i) =>
            <tr>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                    <div className="links">
                    <Link to={`/pets/${pet._id}`}>details</Link>
                    &nbsp;
                    <p>|</p>
                    &nbsp;
                    <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                    </div>
                </td>
            </tr>
            )}
            </table>
        </div>
        
    )
}
    
export default PetList;

