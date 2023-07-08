import Head from 'next/head';
import * as React from 'react'
import {
  ChakraProvider,
  Card,  
  CardHeader,
  CardBody,
  Heading,
  Grid,
  Image,
  Stack,
  Text,
  LightMode,
  GridItem,
  extendTheme,
  Link,
  Box,
} from '@chakra-ui/react'
import Layout from '../components/Layout';
import Fonts from '../components/Fonts'

const colors = {
  orange: '#cc5500',
  purple: '#3f3270',
  red: '#730224',
}

const theme = extendTheme ({
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
        'learn': {
          fontSize: 30,
        }
      }
    }
  },
  colors,
})

export default function Home() {

  return (
    <ChakraProvider theme={theme}>
      
    <Layout>

    <Fonts/>

    <LightMode>
    <Head>
      <title>YAMS Incorporated</title>
    </Head>

    <div className="Title">
      <h1>YAMS</h1>
    </div>    
    
    <div className="Title-Sub">
      <h2>Co-Founders</h2>
    </div>

    <Grid pb='100px' px='150px' bgColor="white" templateColumns='repeat(4, 1fr)' gap={5}>
      
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
              <Heading textAlign ='left' color="purple">Looshus</Heading>
              <Text color='orange' variant='sub-heading'>Channel Surfer</Text>
            <Text textAlign='right'>
              <Link variant='learn' color='red'>></Link>
            </Text>
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
          <Heading textAlign='left' color="purple">Qaivy</Heading>
          <Text color='orange' variant='sub-heading'>The Old Guy</Text>
          <Text textAlign='right'>
            <Link variant='learn' color='red'>></Link>
          </Text>
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
          <Heading textAlign='left' color="purple">Wala</Heading>
          <Text color='orange' variant='sub-heading'>Sir Roland</Text>
          <Text textAlign='right'>
            <Link variant='learn' color='red'>></Link>
          </Text>
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
          <Heading textAlign="left" color="purple">Zayniel</Heading>
          <Text color='orange' variant='sub-heading'>Edgelord</Text>
          <Text textAlign='right'>
            <Link variant='learn' color='red'>></Link>
          </Text>      
      </Stack>
      </CardBody>
    </Card>
    </Grid>

    <div className="Title-Sub">
      <h2>Honorary Members</h2>
    </div>

    <Grid pb='100px' px='150px' bgColor="white" templateColumns='repeat(4, 1fr)' gap={5}>
      
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
              <Heading textAlign ='left' color="purple">Mcnot</Heading>
              <Text color='orange' variant='sub-heading'>Jeff</Text>
            <Text textAlign='right'>
              <Link variant='learn' color='red'>></Link>
            </Text>
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
          <Heading textAlign='left' color="purple">Cintreuse</Heading>
          <Text color='orange' variant='sub-heading'>Brandon</Text>
          <Text textAlign='right'>
            <Link variant='learn' color='red'>></Link>
          </Text>
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
          <Heading textAlign='left' color="purple">Ciashed</Heading>
          <Text color='orange' variant='sub-heading'>Jummy</Text>
          <Text textAlign='right'>
            <Link variant='learn' color='red'>></Link>
          </Text>
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
          <Heading textAlign="left" color="purple">MindiiBin</Heading>
          <Text color='orange' variant='sub-heading'>Mr. Anderson</Text>
          <Text textAlign='right'>
            <Link variant='learn' color='red'>></Link>
          </Text>      
      </Stack>
      </CardBody>
    </Card>
    </Grid>

    </LightMode>
    </Layout>
    </ChakraProvider>
  );
}