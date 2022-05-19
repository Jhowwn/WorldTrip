import { Flex, Heading } from "@chakra-ui/react";

export default function ContinentBanner({continent}) {
    return (
        <Flex
            w='100%'
            maxWidth={1480}
            bgImage={`url('/continents/europeCity.svg')`}
            h={['150px', '300px', '500px']}
            bgPosition='relative'
            bgRepeat='no-repeat'
            bgSize='cover'
            align='center'
            justify={['center', 'center', 'flex-start']}
            px={['0', '0', '36']}
            pt={['0', '0', '72']}
        >
            <Heading
                color='gray.100'
                justifyContent={['center', 'relative']}
            >{continent.data.title}</Heading>

        </Flex>
    )
}