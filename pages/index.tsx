import Head from 'next/head';
import * as React from 'react';
import NextLink from 'next/link';
import {
  ChakraProvider,
  Card,  
  CardBody,
  Heading,
  Grid,
  Image,
  Stack,
  Text,
  LightMode,
  extendTheme,
  Link,
  IconButton,
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import Layout from '../components/Layout';
import Fonts from '../components/Fonts'

const colors = {
  orange: '#cc5500',
  purple: '#3f3270',
  red: '#730224',
}

const theme = extendTheme ({
  styles: {
    global: (props) => ({
      body: {
        bgGradient: 'linear(to-t, #E2E8F0, white)'
      }
    })
  },
  fonts: {
    heading: "Ikaros",
    body: "Ikaros",
  },
  components: {
    Text: {
      variants: {
        'sub-heading': {
          fontSize: 24,
        },
        'games-heading': {
          fontSize: 28,
        },
        'games': {
          fontSize: 20,
        }

      }
    },
    Link: {
      variants: {
        'learn-more': {
          fontSize: "30px",

          _hover: {
            transform: "scale(1.1)",
          }
        }
      }
    }
  },
  colors,
})

export default function Home() {

  return (
    <ChakraProvider theme={theme}>
      <LightMode>
    <Layout>
    <Fonts/>
    
    <Head>
      <title>YAMS Incorporated</title>
    </Head>

    <div className="Title">
      <h1>YAMS</h1>
    </div>    
    
    <div className="Title-Sub">
      <h2>Co-Founders</h2>
    </div>

<div className='grid-container'>
    <Grid pb='100px' templateColumns='repeat(4, 1fr)' gap={20}>
      
        <Card 
          overflow='hidden'
          variant='outline'
          boxShadow='2xl'
          maxW='300px'
          >
          <CardBody>
            <Stack>
            <Image
            src='./lu-pic.jpg'
            alt='lu-pic'
            borderRadius='lg'
            boxSize='300px'
            h='200px'
            objectFit='cover'
            />
              <Heading textAlign ='left' color="red">Looshus</Heading>
              <Text color='black' variant='sub-heading'>Lucius Padaoan</Text>
                <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Lucius'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />
          </Stack>
          </CardBody>
        </Card>

    <Card 
        overflow='hidden'
        variant='outline'
        boxShadow="2xl"
        maxW='300px'
        >
      <CardBody>
      <Stack>
      <Image
        objectFit='cover'
        src='./ben.jpg'
        alt='ben'
        boxSize='300px'
        h='200px'
        borderRadius='lg'
        />
          <Heading textAlign='left' color="red">Qaivy</Heading>
          <Text color='black' variant='sub-heading'>Ben Stier</Text>
          <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Ben'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />
      </Stack>
      </CardBody>
    </Card>

    <Card 
        overflow='hidden'
        variant='outline'
        boxShadow='2xl'
        maxW='300px'
        >
      <CardBody>
      <Stack>
      <Image
        objectFit='cover'
        src='./riley.jpg'
        alt='riley'
        boxSize='300px'
        h='200px'
        borderRadius='lg'
        />
          <Heading textAlign='left' color="red">Tiwala</Heading>
          <Text color='black' variant='sub-heading'>Riley Martinson</Text>
          <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Riley'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />
      </Stack>
      </CardBody>
    </Card>

    <Card
        overflow='hidden'
        variant='outline'
        boxShadow='2xl'
        maxW='300px'>
      <CardBody>
      <Stack>
      <Image
        objectFit='cover'
        src='./zayne.jpg'
        alt='zayne'
        boxSize='300px'
        h='200px'
        borderRadius='lg'
        />
          <Heading textAlign="left" color="red">Zayniel</Heading>
          <Text color='black' variant='sub-heading'>Zayne Pepin</Text>
          <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Zayne'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />    
      </Stack>
      </CardBody>
    </Card>
    </Grid>
    </div>

    <div className="Title-Sub">
      <h2>Honorary Members</h2>
    </div>

    <div className='grid-container'>
    <Grid pb='100px'templateColumns='repeat(4, 1fr)' gap={20}>
      
        <Card 
          overflow='hidden'
          variant='outline'
          boxShadow='2xl'
          maxW='300px'
          >
          <CardBody>
            <Stack>
            <Image
            src='./zach.jpg'
            alt='zach'
            borderRadius='lg'
            boxSize='300px'
            h='200px'
            objectFit='cover'
            />
              <Heading textAlign ='left' color="red">Mcnot</Heading>
              <Text color='black' variant='sub-heading'>Zach Roberts</Text>
              <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Zach'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />
          </Stack>
          </CardBody>
        </Card>

    <Card 
        overflow='hidden'
        variant='outline'
        boxShadow="2xl"
        maxW='300px'
        >
      <CardBody>
      <Stack>
      <Image
        objectFit='cover'
        src='./brayden.jpg'
        alt='brayden'
        boxSize='300px'
        h='200px'
        borderRadius='lg'
        />
          <Heading textAlign='left' color="red">Cintreuse</Heading>
          <Text color='black' variant='sub-heading'>Brayden Huffman</Text>
          <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Brayden'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />
      </Stack>
      </CardBody>
    </Card>

    <Card 
        overflow='hidden'
        variant='outline'
        boxShadow='2xl'
        maxW='300px'
        >
      <CardBody>
      <Stack>
      <Image
        objectFit='cover'
        src='./james.jpg'
        alt='james'
        boxSize='300px'
        h='200px'
        borderRadius='lg'
        />
          <Heading textAlign='left' color="red">Ciashed</Heading>
          <Text color='black' variant='sub-heading'>James Peacock</Text>
          <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Jimmy'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />
      </Stack>
      </CardBody>
    </Card>

    <Card
        overflow='hidden'
        variant='outline'
        boxShadow='2xl'
        maxW='300px'>
      <CardBody>
      <Stack>
      <Image
        objectFit='cover'
        src='./hunter.jpg'
        alt='hunter'
        boxSize='300px'
        h='200px'
        borderRadius='lg'
        />
          <Heading textAlign="left" color="red">MindiiBin</Heading>
          <Text color='black' variant='sub-heading'>Hunter Anderson</Text>
          <IconButton aria-label='Learn More' 
                  as={NextLink} href='/Hunter'
                  borderRadius='lg'
                  color='red'
                  size='lg'
                  variant='outline'
                  colorScheme='red'
                  icon={<ArrowRightIcon />} 
                />  
      </Stack>
      </CardBody>
    </Card>
    </Grid>
    </div>
    
    </Layout>
    </LightMode>
    </ChakraProvider>
  );
}