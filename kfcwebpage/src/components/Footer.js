import React from 'react';
import { Box, Flex, Text, Link, IconButton, VStack, HStack, Image } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="black" color="white" py={5} mt={1}>
      <Flex justify="space-between" mx="auto" maxW="1200px" px={7}>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-ZOjOyQtL0KqFtuFluMrNsQig90HFrGyEg&s" alt="KFC Logo" boxSize="80px" />
        <Flex justify="space-around" flex="1">
          <VStack align="flex-start" spacing={2} ml={10}>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Legal</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Terms and Conditions</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Privacy Policy</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Disclaimer</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Caution Notice</Link>
          </VStack>
          <VStack align="flex-start" spacing={2} ml={10}>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>KFC India</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>About KFC</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>KFC Care</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Careers</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Our Golden Past</Link>
          </VStack>
          <VStack align="flex-start" spacing={2} ml={10}>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>KFC Food</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Menu</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Order Lookup</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Gift Card</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Nutrition & Allergen</Link>
          </VStack>
          <VStack align="flex-start" spacing={2} ml={10}>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Support</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Get Help</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Contact Us</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>KFC Feedback</Link>
            <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>Privacy Policy</Link>
          </VStack>
        </Flex>
        <VStack align="flex-start" spacing={2} ml={10}>
          <Link href="#" color="white" _hover={{ textDecoration: 'underline' }}>
            <Text as="span" mr={2}>Find a KFC</Text>
            <Text as="span" color="red.500">📍</Text>
          </Link>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" boxSize="100px" />
            </Link>
            <Link href="#" isExternal>
              <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" boxSize="100px" />
            </Link>
          </HStack>
          <HStack spacing={4}>
            <IconButton as="a" href="#" icon={<FaInstagram />} aria-label="Instagram" bg="transparent" color="white" _hover={{ color: 'gray.500' }} />
            <IconButton as="a" href="#" icon={<FaFacebook />} aria-label="Facebook" bg="transparent" color="white" _hover={{ color: 'gray.500' }} />
            <IconButton as="a" href="#" icon={<FaTwitter />} aria-label="Twitter" bg="transparent" color="white" _hover={{ color: 'gray.500' }} />
          </HStack>
        </VStack>
      </Flex>
      <Text textAlign="center" mt={10} fontSize="sm" color="gray.500">
        Copyright © KFC Corporation 2024. All rights reserved
      </Text>
    </Box>
  );
};

export default Footer;
