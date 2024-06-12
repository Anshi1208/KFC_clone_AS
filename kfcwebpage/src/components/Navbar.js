import React from 'react';
import { Box, Text, Flex, Image, HStack, Spacer, AspectRatio } from '@chakra-ui/react'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <Box>
      {/* Top Promotional Bar */}
      <Box color="black" h={10} px={4} display="flex" justifyContent="center">
        <Text fontWeight="bold">Free Delivery on Orders Above ₹500!</Text>
      </Box>
      <hr />

      {/* Sticky Navbar */}
      <Box position="sticky" top="0" zIndex="1000" bg="white">
        <Flex h={20} mr={50} ml={50} alignItems="center" justifyContent="space-between">
          {/* Logo Container with Margin */}
          <Box mr={4}>
            <Flex alignItems="center">
              <Image
                src="https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-KFC-Logo.jpeg"
                alt="KFC Logo"
                height="30px"
              />
            </Flex>
          </Box>

          {/* Navigation Menu and Deals */}
          <HStack spacing={4}>
            <Link to="/menu" style={{ fontWeight: 'bold' }}>
              Menu
            </Link>
            <Link to="/deals" style={{ fontWeight: 'bold' }}>
              Deals
            </Link>
          </HStack>

          {/* Spacer for Alignment */}
          <Spacer />

          {/* Sign In and Cart Icons */}
          <HStack spacing={4}>
            <Text fontWeight="bold">signin</Text>
            <Link to="/signin">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0UMwSTbrZtFCiTiP4rliwqBdBdFpscWFGg&s"
                alt="Sign In"
                width="25px"
                height="25px"
              />
            </Link>
            <Text fontWeight="bold">₹0</Text>
            <Link to="/cart">
              <Image
                src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
                alt="Cart"
                width="30px"
                height="30px"
              />
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Non-sticky Promotional Bar */}
      <Box bg="black" color="white" h={12} px={4} display="flex" justifyContent="center">
        <Text fontWeight="bold">Free Delivery on Orders Above ₹500!</Text>
      </Box>

      {/* Main Content */}
      <Box display="flex" flexDirection="column" minHeight="100vh">
        {/* Centered Promotional Bar with Image */}
        <Box position="relative">
          <AspectRatio height="450px">
            <Image
              src="https://i.ytimg.com/vi/tMWtHH-L9yg/maxresdefault.jpg"
              alt="Promotional Image"
              objectFit="cover"
            />
          </AspectRatio>
          <Flex
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            pointerEvents="none"
          >
            <Image
              src="https://1000logos.net/wp-content/uploads/2017/03/Font-of-the-KFC-Logo.jpeg"
              alt="KFC Logo"
              height="30px"
            />
            <Image
              src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
              alt="Cart"
              width="30px"
              height="30px"
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
