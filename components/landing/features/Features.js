import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    id: 0,
    title: 'FREE',
    text: 'You can Sign Up and try it out before bidding!'
  },
  {
    id: 1,
    title: 'Confidential',
    text: 'Your offer is visible only for seafarer you are bidding.'
  },
  {
    id: 2,
    title: 'Check expectations',
    text: 'Seafarers set their own expectations about the position.'
  },
  {
    id: 3,
    title: 'Direct',
    text: 'You contact seafarers directly without any third party services.'
  },
  {
    id: 4,
    title: 'Safe',
    text: "Review seafarer's documents before bidding. No more falsificated information and scam. Protect yourself."
  },
  {
    id: 5,
    title: 'Fast',
    text: 'Removing third-party agents will bring you fast recruiting experience',
  },
  {
    id: 6,
    title: 'Stay in Touch',
    text: 'If seafarer accept your company bid, you can contact directly from your Dashboard.',
  },
  {
    id: 7,
    title: 'Affordable',
    text: 'Forget about hundreds of dollars spent on each vacancy. Only pay for those you are interested in.'
  }
]

export default function Features() {
  return (
    <Box p={4} py={24} id="features" bg='dark' color='light'>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'} color='light'>How it works</Heading>
        <Box w='full' bg='cta.100' h={2}>&nbsp;
        </Box>
        <Text color={'mid'} fontSize={'xl'}>
          Once you register your company with GetSeafarer you will get access to thousands of talented
          seafarers and professionals in the marine field. Browse seafarers, find your excellent candidate
          and make a bid. Seafarer will review it and contact you!
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'mid'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}