import { Flex, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from 'next';
import * as Prismic from "@prismicio/client";
import * as prismicH from '@prismicio/helpers'
import Cities from "../../components/City";
import Continent from "../../components/Continent";
import ContinentBanner from "../../components/ContinentBanner";
import { getPrismicClient } from "../../service/prismic";
import { PrismicRichText } from "@prismicio/react";

interface Continent {
    uid: string;
    data: {
        title: string;
        sliderdescription: string;
        sliderimage: string;
        continentedescription: string;
        countryimage: string;
        countries: string;
        languages: string;
        cities: string;
        cities100: {
            countriesimage: string;
            flagscities: string;
            city: string;
            country: string;
        }[];
    }
}

export interface ContinentProps {
    continent: Continent
}

export default function Continente({continent}: ContinentProps): JSX.Element {
    return (
        <>
            <ContinentBanner continent={continent} />
            <Flex
                direction="column"
                maxWidth='1160px'
                mx='auto'
                mb='10'
                px='1rem'
            >
                <Continent continent={continent} />
                <Cities continent={continent} />
            </Flex>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const prismic = getPrismicClient();
    const continents = await prismic.query([
        Prismic.predicates.at('document.type', 'continents')]
    );

    const paths = continents.results.map(continent => {
        return { 
            params: {
                slug: continent.uid
            }
        }
    })

    return { 
        paths, 
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async context => {
    const prismic = getPrismicClient();
    const {slug} = context.params;
    const response = await prismic.getByUID('continents', String(slug), {});

    console.log(response)
    const continent = {
        uid: response.uid,
        data: {
            title: response.data.title,
            sliderdescription: response.data.sliderdescription,
            sliderimage: {url: response.data.sliderimage.url},
            continentedescription: prismicH.asText(response.data.continentedescription),
            countryimage: {url: response.data.countryimage},
            countries: response.data.countries,
            languages: response.data.languages,
            cities: response.data.cities,
            cities100: response.data.cities100.map(eachCity => {
                return {
                        countriesimage: eachCity.countriesimage.url,
                        flagscities: eachCity.flagscities.url,
                        city: eachCity.city,
                        country: eachCity.country,
                }
            })
        }
    }

    return { 
        props: {
            continent
        }
    }
}