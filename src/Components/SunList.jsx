// Modify your component to include the updated CSS class
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SunList.css'; // Import the updated CSS file

function SunList() {
    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/sunglasses')
            .then((response) => {
                setSunglasses(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            
            <ul className="sun-list"> {/* Use the updated sun-list class here */}
                {sunglasses.map((sunglass) => (
                    <li key={sunglass.id}>
                        <h3>{sunglass.title}</h3>
                        <Link to={`/sundetails/${sunglass.id}`}>
                            <img src={sunglass.image} alt="" />
                        </Link>
                        <h2>Price: ₹{sunglass.price}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SunList;
