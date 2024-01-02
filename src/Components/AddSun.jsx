import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '', // Initialize ID as a string
      title: '',
      image: '',
      quantity: 0,
      price: 0,
      frameType: '',
      frameSize: '',
      brands: '',
      reviews: 0,
      ratings: '',
      bestSeller: false,
      imageDetails: [], // Added an array to store imageDetails
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({ [name]: value });
  }

  handleImageDetailsChange = (e, index) => {
    const imageDetails = [...this.state.imageDetails];
    imageDetails[index] = e.target.value;
    this.setState({ imageDetails });
  }

  handleAddImageDetail = () => {
    this.setState((prevState) => ({
      imageDetails: [...prevState.imageDetails, ''],
    }));
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a Cart object from the state, including imageDetails
    const newCart = {
      id: this.state.id, // ID remains a string
      title: this.state.title,
      image: this.state.image,
      quantity: this.state.quantity,
      price: this.state.price,
      frameType: this.state.frameType,
      frameSize: this.state.frameSize,
      brands: this.state.brands,
      reviews: this.state.reviews,
      ratings: this.state.ratings,
      bestSeller: this.state.bestSeller,
      imageDetails: this.state.imageDetails,
    };

    // Increment the ID as a string for the next cart
    const nextId = (parseInt(this.state.id) + 1).toString();
    this.setState({ id: nextId });

    // Send a POST request to your Spring Boot backend to create a new cart
    axios.post('http://localhost:8080/sunglasses/postsunglasses', newCart)
      .then(response => {
        if (response.status === 201) {
          // Cart added successfully, you can handle the success here
          console.log('Cart added successfully');
        } else {
          // Handle errors here
          console.error('Error adding cart');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Create Cart</h1>
        <form onSubmit={this.handleFormSubmit}>


           <label htmlFor="title">ID: </label>
           <input type="text" name="id"  value={this.state.id} onChange={this.handleInputChange} />
           <br />

          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={this.state.title} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="image">Image URL: </label>
          <input type="text" name="image" id="image" value={this.state.image} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" id="price" value={this.state.price} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="frameType">Frame Type: </label>
          <input type="text" name="frameType" id="frameType" value={this.state.frameType} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="frameSize">Frame Size: </label>
          <input type="text" name="frameSize" id="frameSize" value={this.state.frameSize} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="brands">Brands: </label>
          <input type="text" name="brands" id="brands" value={this.state.brands} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="reviews">Reviews: </label>
          <input type="number" name="reviews" id="reviews" value={this.state.reviews} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="ratings">Ratings: </label>
          <input type="text" name="ratings" id="ratings" value={this.state.ratings} onChange={this.handleInputChange} />
          <br />
          <label htmlFor="bestSeller">Best Seller: </label>
          <input type="checkbox" name="bestSeller" id="bestSeller" checked={this.state.bestSeller} onChange={this.handleInputChange} />
          <br />
          <label>Image Details:</label>
          {this.state.imageDetails.map((detail, index) => (
            <input
              key={index}
              type="text"
              value={detail}
              onChange={(e) => this.handleImageDetailsChange(e, index)}
            />
          ))}
          <button onClick={this.handleAddImageDetail}>Add Image Detail</button>
          <br />
          <Link to="/Adminsun">
            <button type="submit">Create Cart</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default AddFrame;
