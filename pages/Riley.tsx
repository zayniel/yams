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
    DarkMode
} from '@chakra-ui/react'

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
            <title>About Riley</title>
        </Head>

        <LightMode>
        
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
                        src='./omen.png'
                        objectFit='cover'
                        h='400px'
                        w='50%'
                        objectPosition='45% 30px'
                        
                    />  
                    <CardBody fontSize='xl' textAlign='center'>
                        <Text color='red'>Time Played</Text>
                        <Divider/>
                        55 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        50.5%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        1.05
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
                    src='./astra.png'
                    objectFit='cover'
                    h='400px'
                    w='50%'
                    objectPosition='50% 60px'
                />
                <CardBody fontSize='xl' textAlign='center'>
                    <Text color='red'>Time Played</Text>
                        <Divider/>
                        32 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        44.6%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        0.98
                    </CardBody>
                </Card>
            </Stack>
            </GridItem>
            <GridItem>
            <Card borderRadius='lg' mt='20px' pt='30px' px='30px' h='500px' align='center' textAlign='center' variant='outline' boxShadow='2xl'>
                <Image
                    src='./riley.jpg'
                    borderRadius='xl'
                    boxSize='450px'
                    h='200px'
                    objectFit='cover'
                    objectPosition='50% 30%'
                />
                <CardBody mt='10px'>
                <Heading fontSize='7xl' color='red'>Tiwala</Heading>
                    <Text fontSize='2xl'>Riley Martinson</Text>
                    <br></br>
                    <Divider/>
                    <br></br>
                    <Text variant='sub-heading'>Role: Controller</Text>
                </CardBody>
            </Card>
            </GridItem>

            <GridItem colStart={2} rowStart={2}>
                <Card mt='-30px' mb='0' h='300px' variant='outline' textAlign='center' boxShadow='2xl'>
                    <CardBody>
                    
                    </CardBody>
                </Card>
            </GridItem>

            <GridItem colStart={3} rowSpan={2}>
            <Center>
            <Image
                src='./apex.png'
                objectFit='cover'
                h='200px'
                w='400px'
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
                    <Text color='red'>BR Kills</Text>
                        <Divider/>
                        1,259
                        <br></br><br></br>
                        <Text color='red'>Gravity lift: Teammates lifted</Text>
                        <Divider/>
                        837
                        <br></br><br></br>
                        <Text color='red'>BR Damage</Text>
                        <Divider/>
                        529,624
                    </CardBody>
                    <Image
                        src='./horizon.png'
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
                >
                    <CardBody fontSize='xl' textAlign='center'>
                    <Text color='red'>BR Kills</Text>
                        <Divider/>
                        779
                        <br></br><br></br>
                        <Text color='red'>BR Damage</Text>
                        <Divider/>
                        361,917
                        <br></br><br></br>
                        <Text color='red'>BR Wins</Text>
                        <Divider/>
                        36
                    </CardBody>
                <Image
                    src='./wraith.png'
                    objectFit='cover'
                    h='500px'
                    w='50%'
                    objectPosition='50% 110px'
                />
                </Card>
            </Stack>
            </GridItem>
        </Grid>
        </LightMode>
        </ChakraProvider>
    );
}