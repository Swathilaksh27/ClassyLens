import React, { useState } from 'react';
import './CustomizationForm.css';
import { useNavigate } from 'react-router-dom';

const CustomizationForm = () => {
  const [brandTitle, setBrandTitle] = useState('');
  const [brandName, setBrandName] = useState('');
  const [colour, setColour] = useState('');
  const [material, setMaterial] = useState('');
  const [frameType, setFrameType] = useState('');
  const [frameSize, setFrameSize] = useState('');
  const [prescriptiveLensType, setPrescriptiveLensType] = useState('');

  const brandTitleOptions = [
    "Half Rim Square Eyeglasses",
    "Tortoise Full Rim Rectangle Eyeglasses",
    "Matte Full Rim Rectangle Eyeglasses",
    "Transparent Full Rim Round Eyeglasses",
    "Full Rim Rectangle Eyeglasses",
    "Half Rim Round Eyeglasses",
    "Transparent Full Rim Cat Eye Eyeglasses"
  ];

  const brandNameOptions = [
    "Vincent Chase Online",
    "hustlr",
    "Valerie Spencer",
    "Lenskart Blu",
    "Titan Eye Plus",
    "Polaroid",
    "Salvador Eyewear"
  ];

  const materialOptions = [
    "Plastic",
    "Metal",
    "Stainless Steel",
    "Flexon"
  ];

  const colourOptions = [
    "Black",
    "White",
    "Brown",
    "Green",
    "Blue",
    "Pink",
    "Purple",
    "Red",
    "Grey",
    "Gold",
    "Silver"
  ];

  const frameTypeOptions = [
    "Full Rim",
    "Half Rim",
    "Rimless Round",
    "Wide",
    "Oval",
    "Circle",
    "Box",
    "Cat"
  ];

  const frameSizeOptions = [
    "Wide",
    "Narrow",
    "Medium",
    "Extra-Wide",
    "Extra-Narrow"
  ];

  const prescriptiveLensTypeOptions = [
    "Single-Vision Lenses",
    "Bifocal Lenses",
    "Trifocal Lenses",
    "Progressive Lenses",
    "Photochromic Lenses",
  ];

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customizationData = {
      brandTitle,
      brandName,
      colour,
      material,
      frameType,
      frameSize,
      prescriptiveLensType,
    };

    try {
      const response = await fetch('http://localhost:8080/customizations/post-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customizationData),
      });

      if (response.ok) {
        console.log('Customization details submitted successfully!');

        // Store the customization data in local storage
        localStorage.setItem('customizationData', JSON.stringify(customizationData));

        // Add any additional logic here after successful submission
      } else {
        console.error(`Failed to submit customization details. Status: ${response.status}`);
        // Handle specific error cases if needed
      }
    } catch (error) {
      console.error('Error submitting customization details:', error.message);
      // Handle network or other errors
    }
    nav("/home");
  };
  return (
    <div className="customization-form-container">
      <h2>Customization Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brandTitle">Brand Title:</label>
        <select
          id="brandTitle"
          name="brandTitle"
          value={brandTitle}
          onChange={(e) => setBrandTitle(e.target.value)}
        >
          <option value="" disabled>Select Brand Title</option>
          {brandTitleOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="brandName">Brand Name:</label>
        <select
          id="brandName"
          name="brandName"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        >
          <option value="" disabled>Select Brand Name</option>
          {brandNameOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="material">Material:</label>
        <select
          id="material"
          name="material"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        >
          <option value="" disabled>Select Material</option>
          {materialOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="colour">Colour:</label>
        <select
          id="colour"
          name="colour"
          value={colour}
          onChange={(e) => setColour(e.target.value)}
        >
          <option value="" disabled>Select Colour</option>
          {colourOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="frameType">Frame Type:</label>
        <select
          id="frameType"
          name="frameType"
          value={frameType}
          onChange={(e) => setFrameType(e.target.value)}
        >
          <option value="" disabled>Select Frame Type</option>
          {frameTypeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="frameSize">Frame Size:</label>
        <select
          id="frameSize"
          name="frameSize"
          value={frameSize}
          onChange={(e) => setFrameSize(e.target.value)}
        >
          <option value="" disabled>Select Frame Size</option>
          {frameSizeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <label htmlFor="prescriptiveLensType">Prescriptive Lens Type:</label>
        <select
          id="prescriptiveLensType"
          name="prescriptiveLensType"
          value={prescriptiveLensType}
          onChange={(e) => setPrescriptiveLensType(e.target.value)}
        >
          <option value="" disabled>Select Prescriptive Lens Type</option>
          {prescriptiveLensTypeOptions.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        

          <button type="submit" onClick={handleSubmit}>Submit Customization</button>
       
      </form>
    </div>
  );
};

export default CustomizationForm;
