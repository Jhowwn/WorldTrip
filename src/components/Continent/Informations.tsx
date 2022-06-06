import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../pages/continent/[slug]";

export default function Informations({ continent }: ContinentProps) {
    const { countries, languages, cities } = continent.data
    return (
        <Flex alignItems="center" justifyContent="space-between">
            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                    {countries}
                </Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                    países
                </Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                    {languages}
                </Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                    línguas
                </Text>
            </Flex>

            <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
                <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
                    {cities}
                </Heading>
                <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
                    cidades +100

                   
                </Text>
            </Flex>

        </Flex>
    )
}