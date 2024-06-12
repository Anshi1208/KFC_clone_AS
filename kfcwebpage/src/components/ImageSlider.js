import React, { useState } from 'react';
import { Box, Image, IconButton, Flex, Text, Button, Heading } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const images = [
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/CHKZINGER.jpg?ver=45.1', alt: 'Image 1', text: 'FREE CHICKEN', details: 'Details for Image 1' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/ADDCHK99.jpg?ver=45.1', alt: 'Image 2', text: 'ADD 2PC HOT...', details: 'Details for Image 2' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/BIGSAVE.jpg?ver=45.1', alt: 'Image 3', text: 'UPTO RS 100 OFF', details: 'Details for Image 3' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/ADDCHK99.jpg?ver=45.1', alt: 'Image 4', text: 'FREE POPCORN', details: 'Details for Image 4' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/CHKZINGER.jpg?ver=45.1', alt: 'Image 5', text: 'FREE 1PC CHICKEN', details: 'Details for Image 5' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/ADDCHK99.jpg?ver=45.1', alt: 'Image 6', text: 'GET FLAT 75 OFF', details: 'Details for Image 6' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/CHKZINGER.jpg?ver=45.1', alt: 'Image 7', text: 'FREE DELIVERY', details: 'Details for Image 7' },
  { src: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/md/CHKZINGER.jpg?ver=45.1', alt: 'Image 8', text: 'GET 12% OFF', details: 'Details for Image 8' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3.5;

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - imagesPerPage, 0));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + imagesPerPage, images.length - imagesPerPage));
  };

  return (
    <Box bg="black" py={10}>
      <Heading as="h5" color="white" mb={1} ml={40}>
        EXCLUSIVE OFFER'S
      </Heading>
      <Box position="relative" width="1200px" mx="auto" bg="black" p={2} overflow="hidden">
        <Flex
          width={`${(images.length / imagesPerPage) * 100}%`}
          transition="transform 0.5s ease-in-out"
          transform={`translateX(-${currentIndex * (100 / imagesPerPage)}%)`}>
          {images.map((image, index) => (
            <Box key={index} textAlign="center" width={`${100 / imagesPerPage}%`} p={2}>
              <Box bg="white" p={4} borderRadius="md" boxShadow="md">
                <Image src={image.src} alt={image.alt} boxSize="400px" objectFit="cover" />
                <Text mt={2} fontWeight="bold">{image.text}</Text>
                <Text mt={1} fontSize="sm">{image.details}</Text>
                <Button mt={2} colorScheme="blue">Apply Offer</Button>
              </Box>
            </Box>
          ))}
        </Flex>
        <IconButton
          aria-label="Previous Slide"
          icon={<ChevronLeftIcon />}
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          onClick={prevSlide}
          zIndex={1}
        />
        <IconButton
          aria-label="Next Slide"
          icon={<ChevronRightIcon />}
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          zIndex={1}
        />
      </Box>
    </Box>
  );
};

export default ImageSlider;
