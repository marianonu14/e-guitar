import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CardCarousel from './CardCarousel';

import PersonOne from '../public/person-1.png'
import PersonTwo from '../public/person-2.webp'
import PersonThree from '../public/person-3.jpg'


const CarouselSection = () => {
    return ( 
        <Carousel>
            <CardCarousel img={PersonOne} name={'Maria Jones, Texas US'} />
            <CardCarousel img={PersonTwo} name={'Ana, Madrid SP'} />
            <CardCarousel img={PersonThree} name={'Smithson, Monterrey MX'} />
        </Carousel>
     );
}
 
export default CarouselSection;