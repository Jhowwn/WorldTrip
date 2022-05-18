import { Flex, Heading } from "@chakra-ui/react";
import Cities from "../../components/City";
import Continent from "../../components/Continent";
import ContinentBanner from "../../components/ContinentBanner";

export default function Continente() {
    return (
        <>
            <ContinentBanner />
            <Flex
                direction="column"
                maxWidth='1160px'
                mx='auto'
                mb='10'
                px='1rem'
            >
                <Continent />
                <Cities />
            </Flex>
        </>
    )
}