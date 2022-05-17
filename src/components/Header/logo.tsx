import { Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftSLine } from "react-icons/ri"

export default function Logo() {
    const { asPath } = useRouter();
    const isPageHome = asPath !== '/'

    return (
        <Grid
            h='100%'
            mx='auto'
            w='100%'
            maxWidth='1160px'
            alignItems='center'
            templateColumns='repeat(3, 1fr)'
            justifyContent='center'
            alignSelf='center'
        >
            {isPageHome && <Link href='/'>
                <a>
                    <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf='start' />
                </a>
            </Link>}

            <Image
                w={['81px', '184px']}
                src='/logo.svg'
                alt='Avião voando sobre a logo da worldtrip'
                justifyContent='center'
                gridColumn='2'
            />
        </Grid>
    )
}