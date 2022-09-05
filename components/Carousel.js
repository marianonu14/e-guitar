import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import CarouselCard from './CarouselCard';

const CarouselSection = () => {
    return ( 
        <Carousel>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </Carousel>
     );
}
 
export default CarouselSection;