import React, { useState, useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SunDetail() {
  const { id } = useParams();
  const [sunglasses, setSunglasses] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/sunglasses/getsun/${id}`)
      .then((response) => {
        setSunglasses(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  return (
    <div>
      <div className="swathi">
        <h3>{sunglasses.title}</h3>
        <Text my="10px" fontWeight="bold" w="80%">
          {sunglasses.title}
        </Text>
        <Text my="10px" fontWeight="bold" fontSize="x-large">
          ₹{sunglasses.price}
        </Text>
        <Text my="10px" fontWeight="bold" fontSize="large">
          Frame Size: {sunglasses.frameSize}
        </Text>
        <Text my="10px" fontWeight="bold" fontSize="large">
          Brand: {sunglasses.brands}
        </Text>
      </div>
      <Link to={`/cartsun/${id}`}>
      
      <Button p={7} m="10px 20px" w="20%" color="white" bgColor="black">
        BUY
      </Button>
      </Link>
      <div className="image-details">
        {sunglasses.imageDetails &&
          sunglasses.imageDetails.map((image, index) => (
            <img key={index} src={image.imageUrl} alt={`Image ${index + 1}`} />
          ))}
      </div>
    </div>
  );
}

export default SunDetail;


