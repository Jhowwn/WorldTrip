import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import BannerDescription from "./bannerDescription";

export default function Bannner() {
    return (
        <Flex
            w="100%"
            bgImage='url(/banner.svg)'
            bgRepeat='no-repeat'
            bgSize='cover'
            h={['163px', '250px', '335px']}
            bgPosition={['100% 20%', '100% 20%', '100% 30%']}
        >
            <BannerDescription />
           
        </Flex>
    )
}