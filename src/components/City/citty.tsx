import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continent/[slug]";

export default function City({ continent }: ContinentProps) {
  const { cities100 } = continent.data
  console.log(cities100);
  return (
    <>
      {cities100.map(cities => {
        return (
          <Box borderRadius="4px" overflow="hidden" key={cities.country}>
            <Image src={cities.countriesimage} h="170px" w="100%" />
            <Flex p="6" align="center" justify="space-between" bg="white" border="1px" borderColor="yellow.300" borderTop="0">
              <Flex direction="column">
                <Heading fontSize="xl" fontWeight="500">{cities.city}</Heading>
                <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">{cities.country}</Text>
              </Flex>
              <Image src={cities.flagscities} w="30px" h="30px" borderRadius="50%" objectFit="cover" />
            </Flex>
          </Box>
        )
      })}
    </>
  )
}