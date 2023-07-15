import * as React from 'react';
import Head from 'next/head'
import { 
    Image,
    Grid, 
    GridItem,
    ChakraProvider,
    extendTheme,
    Stack,
    Card,
    CardHeader,
    LightMode,
    CardBody,
    Divider,
    Center,
    Text,
    HStack,
    Heading,
    DarkMode,
    Box,
    IconButton
} from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'
import NextLink from 'next/link';

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
    colors,
    components: {
        Text: {
            variants: {
                'sub-heading': {
                    fontSize: 22,
                },
                'bio': {
                    fontSize: 22
                }
            }
        }
    }
})

export default function Home() {
    return (
        <ChakraProvider theme={theme}>

        <Head>
            <title>About Ben</title>
        </Head>

        <LightMode>

        <Box position='fixed' left={5} top={5} zIndex={99}>
        <IconButton 
            aria-label='Learn More' 
            as={NextLink} href='/'
            borderRadius='lg'
            color='white'
            bgColor='#ff4454'
            size='lg'
            variant='outline'
            colorScheme='red'
            boxShadow='xl'
            icon={<ArrowLeftIcon />}  
            />
        </Box>
        
        <Grid px='80px' pt='30px' templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' gap={20}>
            <GridItem colStart={1} rowSpan={2}>
            <Center>
            <Image
                src='./val.png'
                h='200px'
                w='500px'
                objectFit='cover'
                
            />
            </Center>
            <Stack mt='20px' spacing='50px'>
                <Card
                    direction={{base:'column', sm:'row'}}
                    overflow='hidden'
                    variant='outline'
                    boxShadow='2xl'
                    align='center'
                    maxH='300px'
                >   
                    <Image
                        src='./brim.png'
                        objectFit='cover'
                        h='400px'
                        w='50%'
                        objectPosition='50% 40px'
                        
                    />  
                    <CardBody fontSize='xl' textAlign='center'>
                        <Text color='red'>Time Played</Text>
                        <Divider/>
                        20 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        45.0%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        0.90
                    </CardBody>  
                </Card>
                <Card
                    direction={{base:'column', sm:'row'}}
                    overflow='hidden'
                    variant='outline'
                    boxShadow='2xl'
                    align='center'
                    maxH='300px'
                >
                <Image
                    src='./phoenix.png'
                    objectFit='cover'
                    h='400px'
                    w='50%'
                    objectPosition='50% 80px'
                />
                <CardBody fontSize='xl' textAlign='center'>
                    <Text color='red'>Time Played</Text>
                        <Divider/>
                        11 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        63.6%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        1.07
                    </CardBody>
                </Card>
            </Stack>
            </GridItem>
            <GridItem>
            <Card borderRadius='lg' mt='20px' pt='30px' px='30px' h='500px' align='center' textAlign='center' variant='outline' boxShadow='2xl'>
                <Image
                    src='./ben.jpg'
                    borderRadius='xl'
                    boxSize='450px'
                    h='200px'
                    objectFit='cover'
                    objectPosition='0 30%'
                />
                <CardBody mt='10px'>
                <Heading fontSize='7xl' color='red'>Qaivy</Heading>
                    <Text fontSize='2xl'>Ben Stier</Text>
                    <br></br>
                    <Divider/>
                    <br></br>
                    <Text variant='sub-heading'>Roles: Control/Jungle</Text>
                </CardBody>
            </Card>
            </GridItem>

            <GridItem colStart={2} rowStart={2}>
                <Card mt='-30px' mb='0' h='300px' variant='outline' textAlign='center' boxShadow='2xl'>
                    <CardBody>
                    <iframe 
                        width='100%' 
                        height='100%' 
                        src="https://www.youtube.com/embed/xupn2Z56v04" 
                        title="Of Mice and Men - English Project" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        />
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem colStart={3} rowSpan={2}>
            <Center>
            <Image
                src='./lol.png'
                objectFit='cover'
                h='80px'
                w='80px'
            />
            <Image 
                src='./leaguetitle.png'
                h='200px'
                w='300px'
                objectFit='cover'
            /> 
            </Center>
            <Stack mt='20px' spacing='50px'>
                <Card
                    direction={{base:'column', sm:'row'}}
                    overflow='hidden'
                    variant='outline'
                    boxShadow='2xl'
                    align='center'
                    maxH='300px'
                >   
                    <CardBody fontSize='xl' textAlign='center'>
                        <Text color='red'>Mastery</Text>
                        <Divider/>
                        20,310
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        50.0%
                        <br></br><br></br>
                        <Text color='red'>Average K/D/A</Text>
                        <Divider/>
                        2.0 / 3.5 / 5.0
                    </CardBody>
                    <Image
                        src='./voli.png'
                        objectFit='cover'
                        h='300px'
                        w='50%'
                        objectPosition='50% 20px'
                    />    
                </Card>
                <Card
                    direction={{base:'column', sm:'row'}}
                    overflow='hidden'
                    variant='outline'
                    boxShadow='2xl'
                    align='center'
                    maxH='300px'
                    /*
                    bgImage='./urgot.png'
                    backgroundSize='600px'
                    backgroundRepeat='no-repeat'
                    bgPosition='100px 0px'
                    */
                >
                    <CardBody fontSize='xl' textAlign='center'>
                    <Text color='red'>Mastery</Text>
                        <Divider/>
                        10,403
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        50.0%
                        <br></br><br></br>
                        <Text color='red'>Average K/D/A</Text>
                        <Divider/>
                        4.0 / 5.0 / 6.2
                    </CardBody>
                <Image
                    src='./urgot.png'
                    objectFit='cover'
                    h='300px'
                    w='50%'
                    objectPosition='50% 0px'
                />
                </Card>
            </Stack>
            </GridItem>
        </Grid>
        </LightMode>
        </ChakraProvider>
    );
}