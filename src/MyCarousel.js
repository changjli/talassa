import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const MyCarousel = ({ images }) => {
    const carouselItems = images.map((image) => (
        <div key={image.key} className="carousel-item">
            <img src={image.value} alt="" />
        </div>
    ));

    return (
        <div className="my-carousel">
            <Carousel
                swipeable={true}
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={40}
                autoPlay={true}
                infiniteLoop={true}
            >
                {carouselItems}
            </Carousel>
        </div>
    );
}

export default MyCarousel;