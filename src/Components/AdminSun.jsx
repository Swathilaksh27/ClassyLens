import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./AdminSun.css"
import AdminNavbar from './AdminNavbar';

function AdminSun() {
    const [sunglasses, setSunglasses] = useState([]); // Initialize as an array

    useEffect(() => {
        axios.get('http://localhost:8080/sunglasses')
            .then((response) => {
                setSunglasses(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = (id) => {
        // Send a delete request to remove the selected sunglasses
        axios.delete(`http://localhost:8080/sunglasses/${id}`)
            .then(() => {
                // Update the UI by filtering out the deleted sunglasses
                setSunglasses((prevSunglasses) => prevSunglasses.filter((sunglass) => sunglass.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting sunglasses:', error);
            });
    };

    return (
        <div>
        <div><AdminNavbar/></div>
            <h2>Sunglasses List</h2>
            <Link to="/addsun">Add Frame</Link>
            <div className="sunglasses-grid">
                {sunglasses.map((sunglass) => (
                    <div key={sunglass.id} className="sunglasses-item">
                        <h3>{sunglass.title}</h3>
                        <img src={sunglass.image} alt={sunglass.title} />
                        <p>Price: ₹{sunglass.price}</p>
                        <div className="buttons">
                            <Link to={`/editsun/${sunglass.id}`}>
                                <button className="edit-button">Edit</button>
                            </Link>
                            <button className="delete-button" onClick={() => handleDelete(sunglass.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminSun;
