import {
  Flex,
  Stack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export const DesktopNav = ({ items }) => {
  const linkColor = useColorModeValue('light', 'mid');
  const linkHoverColor = useColorModeValue('cta', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {items.map((navItem) => (
        <Flex key={navItem.label} alignContent="center">
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
        </Flex>
      ))}
    </Stack>
  );
};