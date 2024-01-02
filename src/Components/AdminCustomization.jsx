import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function AdminCustomization() {
    const [customizations, setCustomizations] = useState([]);

    useEffect(() => {
      const fetchCustomizations = async () => {
        try {
          const response = await fetch('http://localhost:8080/customizations');
          
          if (response.ok) {
            const data = await response.json();
            setCustomizations(data);
          } else {
            console.error('Failed to fetch customization details.');
          }
        } catch (error) {
          console.error('Error fetching customization details:', error);
        }
      };
  
      fetchCustomizations();
    }, []);
  
    if (customizations.length === 0) {
      return <p>Loading...</p>;
    }
  
    return (
        <div>
          <h2>Customization Details</h2>
          {customizations.map(customization => (
            <div key={customization.id}>
              <p>Brand Title: {customization.brandTitle}</p>
              <p>Brand Name: {customization.brandName}</p>
              <p>Color: {customization.colour}</p>
              <p>Material: {customization.material}</p>
              <p>Frame Type: {customization.frameType}</p>
              <p>Frame Size: {customization.frameSize}</p>
            </div>
          ))}
        </div>
      );
    };
    
    export default AdminCustomization;