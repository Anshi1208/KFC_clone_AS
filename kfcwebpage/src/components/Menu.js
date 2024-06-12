import React, { useState } from 'react';
import { Box, Flex, VStack, Text, Link as ChakraLink, Image, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Importing Link from react-router-dom

const Sidebar = () => (
  <VStack align="start" spacing={4} p={6} w="200px" bg="gray.50" minH="100vh">
    <Text fontSize="2xl" fontWeight="bold">KFC MENU</Text>
    <ChakraLink as={RouterLink} to="#international" fontWeight="bold">
      INTERNATIONAL BURGER FEST
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#matchday" fontWeight="bold">
      MATCH DAY COMBOS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#value" fontWeight="bold">
      VALUE LUNCH SPECIALS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#box" fontWeight="bold">
      BOX MEALS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#burgers" fontWeight="bold">
      BURGERS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#buckets" fontWeight="bold">
      CHICKEN BUCKETS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#bowlz" fontWeight="bold">
      RICE BOWLZ
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#snackers" fontWeight="bold">
      VALUE SNACKERS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#rolls" fontWeight="bold">
      CHICKEN ROLLS
    </ChakraLink>
    <ChakraLink as={RouterLink} to="#snacks" fontWeight="bold">
      SNACKS
    </ChakraLink>
  </VStack>
);

const FoodItem = ({ item, onAddToCart }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} m={2} maxW="sm">
    <Image src={item.image} alt={item.name} />
    <Box p={4}>
      <Text fontWeight="bold">{item.name}</Text>
      <Text>₹{item.price.toFixed(2)}</Text>
      <Button mt={4} colorScheme="red" onClick={() => onAddToCart(item)}>
        Add to Cart
      </Button>
    </Box>
  </Box>
);

const MainContent = ({ items, onAddToCart }) => (
  <Box p={6} flex="1">
    <Text fontSize="2xl" fontWeight="bold">INTERNATIONAL BURGER FEST</Text>
    <Flex wrap="wrap">
      {items.map(item => (
        <FoodItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </Flex>
  </Box>
);

const Menu = () => {
  const [cart, setCart] = useState([]);
  const items = [
    {
      id: 1,
      name: 'Caribbean Spicy Zinger Burger',
      price: 219.05,
      image: 'https://i.ytimg.com/vi/tMWtHH-L9yg/maxresdefault.jpg',
    },
    {
      id: 2,
      name: 'Caribbean Spicy Zinger Burger & Chicken Meal',
      price: 379.05,
      image: 'https://i.ytimg.com/vi/tMWtHH-L9yg/maxresdefault.jpg',
    },
  ];

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Flex>
      <Sidebar />
      <Box flex="1">
        <MainContent items={items} onAddToCart={handleAddToCart} />
      </Box>
    </Flex>
  );
};

export default Menu;
