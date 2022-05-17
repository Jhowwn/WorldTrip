import { Box, Divider } from "@chakra-ui/react";

export default function ScreenDivider() {
    return (
        <Divider
            w={['60px', '90px']}
            mx='auto'
            h='2px'
            bg='gray.700'
            my={['8', '20']} />
    )
}