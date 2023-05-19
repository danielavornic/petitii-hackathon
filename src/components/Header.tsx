import React from 'react'
import { Link, Text, Button, Box, Flex, Grid, Input, IconButton, InputRightElement, InputGroup, Image, Stack} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export const Header = () => {
  return (
    <>
    <Grid templateColumns="repeat(16, 1fr)" gap={4}>
      <Box gridColumn="span 2" />
      <Box gridColumn="span 12" sx={{ display: 'center' }} justifyContent='center' borderBottomWidth='1px' borderBottomLeftRadius='lg' borderRightWidth='1px' borderBottomRightRadius='lg' borderLeftWidth='1px' width="auto" padding='1.5'>
          <Text fontSize='sm'>
            <Link href='https://presedinte.md/' >
              <Stack direction='row'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Emblema_Guvernului_Republicii_Moldova.png" boxSize='20px'/> 
                <Text fontSize='sm'>Site-ul oficial al Preşedinţiei RM</Text>
              </Stack>
            </Link>
          </Text>
      <Flex marginLeft="auto" alignItems="center" paddingRight="1rem">
        <Button size='sm' as="a" href="#"  marginRight="0.5rem" variant="link" color='black' fontSize='sm' fontWeight='light'>
          Ajutor
        </Button>
      <Box width="1px" height="20px" backgroundColor="gray.200" marginRight="0.5rem" />
        <Button size='sm' as="a" href="#" variant="link" color='black' fontSize='sm' fontWeight='light'>
          Sign in / Sign up
        </Button>
      </Flex>
      </Box>
    </Grid>
    
    <Flex alignItems="center" paddingLeft="12.5rem" paddingRight="12.5rem" paddingTop='1rem' paddingBottom='0.5rem' borderBottomWidth='1px' borderBottomRadius='lg' borderRightWidth='1px' borderRightRadius='lg' borderLeftWidth='1px' borderLeftRadius='lg'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Coat_of_arms_of_Moldova.svg/640px-Coat_of_arms_of_Moldova.svg.png" alt="Site Logo" width="70px" height="70px" />
      <Box marginLeft="1rem" fontFamily="inherit" fontSize="18px" paddingTop='1rem'>
        <Text fontSize='2xl' as='b'>PETIŢII ELECTRONICE</Text>
        <Text fontSize='smaller'>Reprezentanţa oficială online a Preşedenţiei RM</Text>
        <br />
      </Box>
      <Button width='auto' marginLeft="auto" marginRight="auto" borderRadius='3xl' fontWeight='light' colorScheme='blue'>Creaţi o petiţie</Button>
      <Flex alignItems="center" paddingRight="0rem">
          <InputGroup>
            <Input placeholder="Căutaţi petiţia" borderRadius='3xl'/>
            <InputRightElement>
              <IconButton colorScheme='blue' aria-label='Search database' borderRadius='3xl' icon={<SearchIcon />} />
            </InputRightElement>
          </InputGroup>
        </Flex>
    </Flex>
    </>
  )
}
