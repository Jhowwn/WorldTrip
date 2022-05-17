import { Flex } from '@chakra-ui/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
    return (
        <Flex
            w='100%'
            h={['250px', '450px']}
            maxW='1240px'
            mx='auto'
            mb={['4', '10']}
            mt='8'
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 4000,
                }}
                style={{ width: '100%', flex: '1' }}
            >
                <SwiperSlide>
                    <Flex
                        w='100%'
                        h='100%'
                        align='center'
                        justify='center'
                        direction='column'
                        bgImage={`url('/Continents/europe.svg')`}
                        bgPosition='100%  30%'
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >

                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}