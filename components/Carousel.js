import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CardCarousel from './CardCarousel';

const CarouselSection = () => {
    return ( 
        <Carousel>
            <CardCarousel />
            <CardCarousel />
            <CardCarousel />
        </Carousel>
     );
}
 
export default CarouselSection;