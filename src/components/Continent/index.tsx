import { Grid, Text } from "@chakra-ui/react";
import Informations from "./Informations";

export default function Continent() {
    return (
        <Grid
            gap={[8, 10, 16, 20]}
            my={['8', '20']}
            templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
            mt={['6', '30']}
        >
            <Text
                fontSize={['lg', 'xl', 'xl', 'lg']}
                textAlign='justify'
                color='gray.700'
            >
                A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>

            <Informations />
        </Grid>
    )
} 