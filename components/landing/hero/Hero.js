import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import Image from 'next/image';

import heroImg from '../../../public/main.jpg';

export default function Hero() {
  return (
    <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'2xl'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
          <Text color={'brand'} as={'span'}>
            Find the Best Seafarers and Officers for your Safe and Efficient Operations.
            </Text>{' '}
            <br />{' '}
          </Heading>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} color={'dark'}>
          GetSeafarer provides access to the market
          of professional Deck Officers, Engineers and Ratings.
          </Text>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'dark'}>
          Find your match, make an offer, welcome your new colleague on board!
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              p={6}
              bg={'cta.100'}
              color={'dark'}
              _hover={{
                bg: 'cta.200',
              }}>
              Start Hiring
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={heroImg}
        />
      </Flex>
    </Stack>
  );
}