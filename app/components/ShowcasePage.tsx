import Slider from "react-slick";
import Image from "next/image";

import RenderArrows from "./RenderArrows";


const ShowcasePage = () => {


    return (
        <div className="flex flex-col justify-center items-center">
            <div id="pageTitle" className="relative">
                <h2 className="text-3xl md:text-5xl font-medium uppercase">Mes Projets</h2>
                <img className="absolute mt-1 md:w-96 w-full" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div id="slider" className="mt-16 md:mt-24 w-full relative">
                <RenderArrows/>
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
                    slidesToShow: 1.67,
                    slidesToScroll: 1,
                    arrows : false
                }}>
                    <div className="">
                        <div className="flex justify-center">
                            <Image width={800} height={450} src="/Rectangle.png" alt="underlinerTitle"/>
                        </div>
                        <div className="flex flex-col justify-center uppercase my-8">
                            <h2 className="text-5xl font-bold text-center leading-snug">CleanDev Paiement Solution</h2>
                            <div>
                                <ul className="flex flex-row list-disc mt-5 font-light space-x-8 justify-center">
                                    <li className="list-none">CleanDev</li>
                                    <li>Laravel</li>
                                    <li>2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image width={800} height={450} src="/Rectangle.png" alt="underlinerTitle"/>
                        </div>
                        <div className="flex flex-col justify-center uppercase my-8">
                            <h2 className="text-5xl font-bold text-center leading-snug">CleanDev Paiement Solution</h2>
                            <div>
                                <ul className="flex flex-row list-disc mt-5 font-light space-x-8 justify-center">
                                    <li className="list-none">CleanDev</li>
                                    <li>Laravel</li>
                                    <li>2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image width={800} height={450} src="/Rectangle.png" alt="underlinerTitle"/>
                        </div>
                        <div className="flex flex-col justify-center uppercase my-8">
                            <h2 className="text-5xl font-bold text-center leading-snug">CleanDev Paiement Solution</h2>
                            <div>
                                <ul className="flex flex-row list-disc mt-5 font-light space-x-8 justify-center">
                                    <li className="list-none">CleanDev</li>
                                    <li>Laravel</li>
                                    <li>2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <Image width={800} height={450} src="/Rectangle.png" alt="underlinerTitle"/>
                        </div>
                        <div className="flex flex-col justify-center uppercase my-8">
                            <h2 className="text-5xl font-bold text-center leading-snug">CleanDev Paiement Solution</h2>
                            <div>
                                <ul className="flex flex-row list-disc mt-5 font-light space-x-8 justify-center">
                                    <li className="list-none">CleanDev</li>
                                    <li>Laravel</li>
                                    <li>2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default ShowcasePage;
