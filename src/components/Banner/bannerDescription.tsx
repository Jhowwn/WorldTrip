import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function BannerDescription() {
    return (
        <Flex
            justify={['center', 'space-between']}
            align='center'
            w='100%'
            mx='auto'
            px={['4', '10', '15', '20', '36']}
        >
            <div>
                <Heading
                    letterSpacing='tight'
                    color='gray.100'
                    fontWeight="500" 
                    fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}

                >
                    5 Continentes,<br />
                    infinitas possibilidades.
                </Heading>
                <Text
                    fontSize={['0.9rem', 'xl']}
                    color='gray.300'
                    mt='4'
                    maxW={["100%", "100%", "100%", "550px"]}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                </Text>
            </div>

            <Image
                src='/Airplane.svg'
                w={["300px", "300px", "300px", "430px"]}
                display={['none', 'none', 'block']}
                transform='translateY(48px)'
                ml='10'
            />
        </Flex>
    )
}