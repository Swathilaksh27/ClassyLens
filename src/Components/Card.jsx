import React, { useState } from "react";
import axios from "axios";
import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import {useNavigate } from "react-router-dom";

import { useCart } from "./CartContext";
const Card = () => {
  let Navigate = useNavigate();
  const { cartItems } = useCart();
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiration: "",
    cvv: "",
    cardholderName: ""
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API
      const response = await axios.post(
        "http://localhost:8080/payments",
        { cardData, cartItems }
      );

      // Assuming your backend returns a success message
      alert("Order successfully placed");

      // You can redirect the user to another page or take any other action here
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error creating payment:", error);
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div className="card">
        <div>
          <Box
            w="700px"
            ml="410px"
            h="600px"
            mt="48px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Box
              bg="black"
              color={"white"}
              fontWeight="650"
              p="8px 0px 8px 8px "
            >
              PAYMENT OPTION
            </Box>
            <Box display={"flex"}>
              <form
                style={{ display: "flex" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Order succesfully placed");
                  Navigate("/home");
                }}
              >
                <Box m="10px 10px 10px 10px ">
                  <Flex justifyContent={"space-between"}>
                    
                    
                  </Flex>
                  <Input
                    placeholder="Enter Card Number"
                    h="30px"
                    m="20px 10px 10px 10px "
                    isRequired
                  />

                  <Flex m="20px 0px ">
                    <Input
                      placeholder="MM/YYYY"
                      h="30px "
                      mr="10px"
                      ml="10px"
                      isRequired
                    />
                    <Input h="30px" placeholder="CVV" isRequired />
                  </Flex>
                  <Input
                    placeholder="Cardholder Name"
                    h="30px"
                    m="20px 10px 20px 10px"
                    w="490px"
                    isRequired
                  />

                  <Box
                    
                  >
                    
                    
                  </Box>
                  <Button
                  
                    fontSize={"13px"}
                    ml="250px "
                    mt="40px "
                    mb="90px"
                    bg="#3bb3a9"
                    color={"white"}
                    borderRadius="0px"
                    type="submit"
                    p="12px 23px 12px 23px "
                    _hover={{ backgroundColor: "black" }}
                  >
                    PLACE ORDER
                    
                  </Button>
                  
                </Box>
              </form>
            </Box>
            
            
          </Box>
        </div>

        
      </div>
    </div>
  );
};

export default Card;
