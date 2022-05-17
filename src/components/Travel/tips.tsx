import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TipsProps {
    icon: string;
    text: string;
}

export default function Tips({icon, text}: TipsProps ) {
    const isMobile = useBreakpointValue({
        base: true,
        lg: false
    });
    return (
        <Flex direction={['row', 'row', 'row' ,'column']} align="center" justify="center">
            {!isMobile ? <Image src={`/icons/${icon}.svg`} w='85px' h='85px' mb='6' /> :
            <Text color='yellow.400' fontSize='4xl' mr='2' mb='5'>.</Text>
            }
            <Text
            fontWeight="600" 
            color="gray.700" 
            fontSize={["md", "xl","2xl"]}
            >
                {text}
            </Text>
        </Flex>
    )
}