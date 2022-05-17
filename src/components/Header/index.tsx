import { Flex } from "@chakra-ui/react";
import Logo from "./logo";

export default function Header() {
    return (
        <Flex
        as='header'
        bg='white' 
        w='100%'
        mx='auto'
        px='1rem'
        h={['50px', '100px']}
        align='center'
        justify='center'
        >
            <Logo />
        </Flex>
    )
}