import * as React from 'react';
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
        
    }
})

export default function Home() {
    return (
        <ChakraProvider theme={theme}>
        <LightMode>
        
        <Grid pt='10' templateColumns='repeat(3, 1fr)' templateRows='repeat(2, 1fr)' gap={20}>
            <GridItem rowSpan={2}>
                    <Image
                        src='./skye.png'
                        objectFit='cover'
                        transform='scaleX(-1)'
                        
                    />
            </GridItem>
            <Card pt='10' alignItems='center' textAlign='center' variant='ghost'>
                <Image
                    src='./lu-pic.jpg'
                    borderRadius='xl'
                    boxSize='450px'
                    h='200px'
                    objectFit='cover'
                    objectPosition='0 20%'
                />
                <CardHeader fontSize='8xl' color='red'>
                    Looshus
                </CardHeader>
            </Card>
            <GridItem colStart={3} rowSpan={2}>
            <Stack mt='10' spacing='60px'>
                <Image
                    src='./thresh.png'
                    objectFit='cover'
                />    
                <Image
                    src='./pyke.png'
                    objectFit='cover'
                    
                />
            </Stack>
            </GridItem>
        </Grid>
        </LightMode>
        </ChakraProvider>
    );
}