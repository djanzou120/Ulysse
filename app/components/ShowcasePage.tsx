import Slider from "react-slick";

import RenderArrows from "./RenderArrows";
import SliderItem from "./SliderItem";
import {createRef, useEffect, useRef} from "react";


const ShowcasePage = () => {
    let customSlider = useRef(null);

    return (
        <div className="flex flex-col justify-center items-center mt-10 md:mt-0">
            <div id="pageTitle" className="relative">
                <h2 className="text-3xl md:text-5xl font-medium uppercase">Mes Projets</h2>
                <img className="absolute mt-1 md:w-96 w-full" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div id="slider" className="mt-16 md:mt-24 w-full relative">
                <RenderArrows sliderEvent={customSlider?.current}/>
                <div className="w-full z-10">
                    <div className="absolute h-full w-full z-10 filterShadowLeft"/>
                    <div className="absolute h-full w-full z-10 filterShadowRight"/>
                </div>
                <Slider className="" {...{
                    // autoplay : true,
                    // autoplaySpeed : 500,
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: window.innerWidth > 768 ? 1.67 : 1,
                    slidesToScroll: 1,
                    arrows: false
                }} ref={customSlider}>
                    <SliderItem/>
                    <SliderItem/>
                    <SliderItem/>
                </Slider>
            </div>
        </div>
    )
}

export default ShowcasePage;
