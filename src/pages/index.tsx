import { Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import ScreenDivider from "../components/Divider";
import Slider from "../components/Slider";
import TravelTypes from "../components/Travel";

export default function Home() {
  return (
    <>
        <Banner />
        <TravelTypes />
        <ScreenDivider />

        <Heading 
        textAlign='center'
        justifyContent='center'
        fontSize={['xl', '2xl', '2xl', '4xl']}
        >
          Vamos nessa?<br /> Então escolha seu continentes
        </Heading>

        <Slider />
    </>
  )
}
