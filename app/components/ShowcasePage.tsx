import Slider from "react-slick";


const ShowcasePage = () => {


    return (
        <div className="flex flex-col justify-center items-center">
            <div id="pageTitle" className="relative">
                <h2 className="text-3xl md:text-5xl font-medium uppercase">Mes Projets</h2>
                <img className="absolute mt-1 md:w-96 w-full" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div id="slider" className="mt-16 md:mt-24 w-full">
                <Slider className="border" {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }}>
                    <div>
                        <img className="w-full" src="/path.png" alt="underlinerTitle"/>
                    </div>
                    <div>
                        <img className="w-full" src="/path.png" alt="underlinerTitle"/>
                    </div>
                    <div>
                        <img className="w-full" src="/path.png" alt="underlinerTitle"/>
                    </div>
                    <div>
                        <img className="w-full" src="/path.png" alt="underlinerTitle"/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default ShowcasePage;
