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
            <title>About Lucius</title>
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
            <Stack mt='10px' spacing='50px'>
                <Card
                    direction={{base:'column', sm:'row'}}
                    overflow='hidden'
                    variant='outline'
                    boxShadow='2xl'
                    minH='130px'
                >
                    <CardBody mt='13px' fontSize='xl' textAlign='center'>
                        <Text color='red'>Current Rank</Text>
                        <Divider/>
                        Silver 3
                    </CardBody>
                    <Image
                            src='./sil3.png'
                            objectFit='cover'
                            h='70px'
                            w='70px'
                            mt='28px'
                            mr='10px'
                        />
                    <CardBody mt='13px' fontSize='xl' textAlign='center'>
                        <Text color='red'>Peak Rank</Text>
                        <Divider/>
                        Gold 1
                    </CardBody>
                    <Image
                            src='./gold1.png'
                            objectFit='cover'
                            h='70px'
                            w='70px'
                            mt='28px'
                            mr='20px'
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
                    <Image
                        src='./gekko.png'
                        objectFit='cover'
                        h='400px'
                        w='50%'
                        objectPosition='50% 60px'
                        
                    />  
                    <CardBody fontSize='xl' textAlign='center'>
                        <Text color='red'>Time Played</Text>
                        <Divider/>
                        4.0 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        50.0%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        0.83
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
                    src='./kj.png'
                    objectFit='cover'
                    h='400px'
                    w='50%'
                    transform='scaleX(-1)'
                    objectPosition='50% 20px'
                />
                <CardBody fontSize='xl' textAlign='center'>
                    <Text color='red'>Time Played</Text>
                        <Divider/>
                        45 Hours
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        55.9%
                        <br></br><br></br>
                        <Text color='red'>K/D</Text>
                        <Divider/>
                        0.93
                    </CardBody>
                </Card>
            </Stack>
            </GridItem>
            <GridItem>
            <Card borderRadius='lg' mt='20px' pt='30px' px='30px' h='500px' align='center' textAlign='center' variant='outline' boxShadow='2xl'>
                <Image
                    src='./zayne.jpg'
                    borderRadius='xl'
                    boxSize='450px'
                    h='200px'
                    objectFit='cover'
                    objectPosition='50% 20%'
                />
                <CardBody mt='10px'>
                <Heading fontSize='7xl' color='red'>Zayniel</Heading>
                    <Text fontSize='2xl'>Zayne Pepin</Text>
                    <br></br>
                    <Divider/>
                    <br></br>
                    <Text variant='sub-heading'>Roles: Initiator/Sentinel/ADC</Text>
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
                    minH='130px'
                >
                    <CardBody mt='13px' fontSize='xl' textAlign='center'>
                        <Text color='red'>Current Rank</Text>
                        <Divider/>
                        Unranked
                    </CardBody>
                    <Image
                            src='./unranked.png'
                            objectFit='cover'
                            h='70px'
                            w='70px'
                            mt='28px'
                            mr='10px'
                        />
                    <CardBody mt='13px' fontSize='xl' textAlign='center'>
                        <Text color='red'>Peak Rank</Text>
                        <Divider/>
                        Silver 3
                    </CardBody>
                    <Image
                            src='./lolsilver.png'
                            objectFit='cover'
                            h='70px'
                            w='70px'
                            mt='28px'
                            mr='20px'
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
                        116,524
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        66.7%
                        <br></br><br></br>
                        <Text color='red'>Average K/D/A</Text>
                        <Divider/>
                        9.7 / 5.7 / 10.5
                    </CardBody>
                    <Image
                        src='./yas.png'
                        objectFit='cover'
                        h='300px'
                        w='50%'
                        objectPosition='50%'
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
                        27,897
                        <br></br><br></br>
                        <Text color='red'>Win Rate</Text>
                        <Divider/>
                        *not enough games*
                        <br></br><br></br>
                        <Text color='red'>Average K/D/A</Text>
                        <Divider/>
                        9.0 / 6.0 / 8.0
                    </CardBody>
                <Image
                    src='./jhin.png'
                    objectFit='cover'
                    h='300px'
                    w='50%'
                    objectPosition='10%'
                />
                </Card>
            </Stack>
            </GridItem>
        </Grid>
        </LightMode>
        </ChakraProvider>
    );
}