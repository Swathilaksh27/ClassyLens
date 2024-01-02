import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Grid, GridItem, Image, Select, Text, useToast} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CartDetail.css';
import { Link } from 'react-router-dom';
function CartDetail() {
  const { id } = useParams();
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/carts/getcart/${id}`)
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
    <div className="swathi">
      <h3>{cart.title}</h3>
     
      <Text my="10px" fontWeight={'bold'} fontSize="x-large">₹{cart.price}</Text>
      <Text my="10px" fontweight={'bold'} fontSize="large">Frame Size: {cart.frameSize}</Text>
      <Text my="10px" fontweight={'bold'} fontSize="large">Frame Type: {cart.frameType}</Text>
      <Text my="10px" fontweight={'bold'} fontSize="large">Brand: {cart.brands}</Text></div>
      <Link to={`/cart/${id}`}>
      <Button p={7} m="10px 20px" w="20%" color="white" bgColor="black" >BUY
      </Button>
      </Link>
      <div className="image-details">
      {cart.imageDetails &&
        cart.imageDetails.map((image, index) => (
          <img key={index} src={image.imageUrl} alt={`Image ${index + 1}`} />
          
          ))}
      </div>
    </div>
  );
}

export default CartDetail;
