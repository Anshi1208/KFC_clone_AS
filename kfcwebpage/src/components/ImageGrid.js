import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

const ImageGrid = () => {
  return (
    <Box>
      {/* Browser Category Name */}
      <Box bg="white" py={4} px={8}>
        <Text fontWeight="bold" fontSize="2xl" ml={24}>BROWSE CATEGORY --------------------------------------------------------------------------------
        
        </Text>
      </Box>

      {/* Image Grid */}
      <Flex flexWrap="wrap" justifyContent="center">
        {/* Row 1 */}
        <Flex justifyContent="center">
          {/* Image 1 */}
          <Box m={4} textAlign="center" >
            <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=45.1" alt="Image 1"  width="240px" height={ 200 } />
            <Text>INTERNATIONAL BURGER FEST</Text>
          </Box>
          
          {/* Image 2 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=45.1" alt="Image 1"  width="240px"  height={ 200 } />
            <Text>MATCH DAY COMBO'S</Text>
          </Box>
          
          {/* Image 3 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=45.1" alt="Image 1"  width="240px" height={ 200 } />
            <Text>VALUE LUNCH SPECIAL</Text>
          </Box>
          
          {/* Image 4 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=45.1" alt="Image 1"  width="240px"  height={ 200 } />
            <Text>BOX MEALS</Text>
          </Box>
        </Flex>

        {/* Row 2 */}
        <Flex justifyContent="center">
          {/* Image 5 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=45.1" alt="Image 1"  width="240px" height={ 200 } />
            <Text>BURGERS</Text>
          </Box>
          
          {/* Image 6 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=45.1" alt="Image 1"  width="240px" height={ 200 } />
            <Text>CHICKEN BUCKETS</Text>
          </Box>
          
          {/* Image 7 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=45.1" alt="Image 1"  width="240px" height={ 200 } />
            <Text>RICE BOWLZ</Text>
          </Box>
          
          {/* Image 8 */}
          <Box m={4} textAlign="center">
          <Image src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT224.jpg?ver=45.1" alt="Image 1"  width="240px" height={ 200 } />
            <Text>VALUE SNACKS</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageGrid;
