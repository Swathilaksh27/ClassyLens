// Cart.jsx
// Cart.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Flex, Text, Image, Divider, Button } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { IconButton } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { useCart } from './CartContext'; // Adjust the import path

function Cart() {
  const { cartItems, setCartItems } = useCart();
  const { id } = useParams();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/sunglasses/getsun/${id}`);

        if (Array.isArray(response.data)) {
          setCartItems(response.data);

          // Store cart items in local storage
          localStorage.setItem('cartItems', JSON.stringify(response.data));
        } else if (response.data.id) {
          setCartItems([response.data]);

          // Store cart items in local storage
          localStorage.setItem('cartItems', JSON.stringify([response.data]));
        } else {
          console.error('Invalid cart data received:', response.data);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartData();
  }, [id, setCartItems]);

  useEffect(() => {
    let calculatedTotal = 0;
    cartItems.forEach((item) => {
      calculatedTotal += item.price * item.quantity;
    });
    setTotal(calculatedTotal);
  }, [cartItems]);

  const increaseQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const reduceQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);

      // Update local storage
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  




  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <div>
        <h1>Your Cart Items</h1>
        <Flex
          className="cart-container"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          w="900px"
          p="20px"
          border="1px solid #ccc"
        >
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            <Box className="item-list" maxW="400px">
              {cartItems.map((el, index) => (
                <Box key={el.id} className="item-container">
                  <Box className="item-image">
                    <Image w="150px" src={el.image} />
                  </Box>
                  <Box className="item-details">
                    <Text className="title">{el.title}</Text>
                    <Flex alignItems="center">
                      <Text className="quantity">{"Qty:" + parseInt(el.quantity)}</Text>
                      <IconButton
                        onClick={() => increaseQuantity(index)}
                        aria-label="Increase Quantity"
                        icon={<AddIcon />}
                        size="sm"
                        marginLeft="8"
                      />
                      <IconButton
                        onClick={() => reduceQuantity(index)}
                        aria-label="Reduce Quantity"
                        icon={<MinusIcon />}
                        size="sm"
                        marginLeft="20"
                      />
                      <Text
                        mr='16px' textDecoration='underline' fontWeight='700'
                        fontStyle='normal' lineHeight='24px' letterSpacing='-.02em' textTransform='capitalize' color='#000042'
                        onClick={() => removeItem(index)}
                        aria-label="Remove Item"
                        cursor='pointer'>
                        Remove
                      </Text>
                    </Flex>
                    <Box className="price-container">
                      <Text>
                        <s>{'₹' + parseInt(el.price + 500)}</s>
                      </Text>
                      <Text>{'₹' + el.price}</Text>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Text>No items in the cart</Text>
          )}

          <Box className="subtotal" p="20px" border="1px solid #ccc" bg="#EFEFEF">
            <Flex flexDirection="column" alignItems="flex-end">
              <Text fontWeight="bold">SUBTOTAL</Text>
              <Text fontWeight="medium">₹{total}</Text>
              <Divider h={2} my={2} />
              <Text fontWeight="bold">TAX COLLECTED</Text>
              <Text fontWeight="medium">+ ₹{total * 0.18}</Text>
              <Divider h={2} my={2} />
              <Text className="order-total-label" fontWeight="bolder" fontSize={18}>
                ORDER TOTAL
              </Text>
              <Text className="order-total-amount" fontWeight="bold" fontSize={18} color="#329BA9">
                ₹{total + total * 0.18}
              </Text>
              <Link to="/checkout">
          <Button mt={4} colorScheme="teal" size="lg">
            Proceed to Checkout
          </Button>
        </Link>
            </Flex>
          </Box>
        </Flex>
      </div>
    </Flex>
  );
}

export default Cart;
