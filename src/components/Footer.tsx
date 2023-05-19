import { ReactNode } from 'react';
import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    Grid,
    useColorModeValue,
    Image,
    GridItem,
    Flex,
  } from '@chakra-ui/react';


const getCurrentYear = () => {
    return new Date().getFullYear();
  };

export default function Footer() {
  const currentYear = getCurrentYear();
  return (
    <Grid borderTopWidth={1} 
        borderStyle={'solid'} 
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        h='125px'
        templateRows='3fr 2fr'
        templateColumns='2fr 3fr 2fr'
        gap={2}
        >
        <GridItem rowSpan={2} colSpan={1} bg='transparent' justifySelf="end" alignSelf="center">
            <Image src="https://gov.md/sites/default/files/banners/gov_logo_md.svg" boxSize='100px'/>
        </GridItem>
        <GridItem colSpan={1} bg='transparent' alignSelf='flex-end'>
            <Stack alignItems='center'>
                <Text fontSize='sm'> © {currentYear} Guvernul Republicii Moldova. Toate drepturile rezervate.</Text>
                <Text fontSize='sm'> Administrare tehnico-tehnologică: <Link href="https://stisc.gov.md/">Serviciul Tehnologia Informației și Securitate Cibernetică</Link>.</Text>
            </Stack>
        </GridItem>
        <GridItem colSpan={1} colStart={2} bg='transparent' >
            <Flex justifyContent='center' gap='50px'>
                <Link href={'https://gov.md/ro'} fontSize={'sm'}>Guvernul</Link>
                <Link href={'https://presedinte.md/'} fontSize={'sm'}>Preşedinţia</Link>
                <Link href={'https://www.parlament.md/CadrulLegal/Constitution/tabid/151/language/ro-RO/Default.aspx'} fontSize={'sm'}>Constituţia</Link>
                <Link href={'https://gov.md/ro/content/contacte'} fontSize={'sm'}>Contacte</Link>
            </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} colStart={3} rowStart={1} bg='transparent' />
    </Grid>
  )
}