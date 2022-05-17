import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Tips from "./tips";

export default function TravelTypes() {
    return (
        <Flex
            w='100%'
            mt={['10', '32']}
        >
            <Grid
                mx='auto'
                w='100%'
                maxWidth='1160px'
                alignItems='center'
                templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
                justifyContent='space-between'
                flexWrap='wrap'
                gap={[1,5]}
            >
                <GridItem>
                    <Tips icon="cocktail" text="vida noturna"/>
                </GridItem>
                <GridItem>
                    <Tips icon="surf" text="praia" />
                </GridItem>
                <GridItem>
                    <Tips icon="building" text="moderna" />
                </GridItem>
                <GridItem>
                    <Tips icon="museum" text="clássica" />
                </GridItem>
                <GridItem colSpan={[2, 2, 2, 1]}>
                    <Tips icon="earth" text="e mais..." />
                </GridItem>
                
            </Grid>
        </Flex>
    );
}