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
    HStack
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
                bg: 'white'
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
            <title>About Lucius</title>
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
                        src='./sova.png'
                        objectFit='cover'
                        h='400px'
                        w='50%'
                        objectPosition='0% 60px'
                        
                    />  
                    <CardBody fontSize='xl' textAlign='center'>
                        <Text color='red'>Time Played</Text>
                        <Divider/>
                        159 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        54.3%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        1.17
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
                    src='./skye.png'
                    objectFit='cover'
                    h='400px'
                    w='50%'
                    transform='scaleX(-1)'
                    objectPosition='0% 60px'
                />
                <CardBody fontSize='xl' textAlign='center'>
                    <Text color='red'>Time Played</Text>
                        <Divider/>
                        25 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        28.3%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        1.05
                    </CardBody>
                </Card>
            </Stack>
            </GridItem>
            <GridItem>
            <Card borderRadius='lg' mt='20px' pt='30px' px='30px' h='500px' align='center' textAlign='center' variant='outline' boxShadow='2xl'>
                <Image
                    src='./lu-pic.jpg'
                    borderRadius='xl'
                    boxSize='450px'
                    h='200px'
                    objectFit='cover'
                    objectPosition='0 20%'
                />
                <CardBody mt='30px'>
                    <HStack>
                        <Text fontSize='3xl'>Lucius</Text>
                        <Text fontSize='5xl' color='red' fontWeight='semibold'>'Looshus'</Text>
                        <Text fontSize='3xl'>Padaoan</Text>
                    </HStack>
                    <br></br>
                    <Divider/>
                    <br></br>
                    <Text variant='sub-heading'>Roles: Support/Initiator</Text>
                </CardBody>
            </Card>
            </GridItem>

            <GridItem colStart={2} rowStart={2}>
                <Card mt='-30px' mb='0' h='300px' variant='outline' textAlign='center' boxShadow='2xl'>
                    <CardBody>
                        * Area for clips to be embedded *
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
                    bgImage='./thresh.png'
                    align='center'
                    maxH='300px'
                >   
                    <CardBody fontSize='xl' textAlign='center'>
                        <Text color='red'>Mastery</Text>
                        <Divider/>
                        362,601
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        40.0%
                        <br></br><br></br>
                        <Text color='red'>Average K/D/A</Text>
                        <Divider/>
                        2.0 / 3.3 / 21.3
                    </CardBody>
                    <Image
                        src='./thresh.png'
                        objectFit='cover'
                        h='300px'
                        w='50%'
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
                    <Text color='red'>Mastery</Text>
                        <Divider/>
                        121,186
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        60.0%
                        <br></br><br></br>
                        <Text color='red'>Average K/D/A</Text>
                        <Divider/>
                        5.2 / 3.4 / 8.4
                    </CardBody>
                <Image
                    src='./pyke.png'
                    objectFit='cover'
                    h='300px'
                    w='50%'
                    objectPosition='-90px'
                />
                </Card>
            </Stack>
            </GridItem>
        </Grid>
        </LightMode>
        </ChakraProvider>
    );
}