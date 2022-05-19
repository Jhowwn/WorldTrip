import { Grid, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";
import Informations from "./Informations";

export default function Continent({continent}: ContinentProps) {
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
                {continent.data.continentedescription}
            </Text>

            <Informations continent={continent} />
        </Grid>
    )
} 