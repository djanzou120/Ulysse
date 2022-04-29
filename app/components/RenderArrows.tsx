import {BsChevronLeft, BsChevronRight} from "react-icons/bs";


const RenderArrows = ({sliderEvent} : any) => {

    return (
        <div className="absolute h-full w-full md:w-2/3 md:translate-x-1/4 translate-y-20 md:translate-y-1/3 z-20">
            <div className="left-2 md:left-8 arrowDiv" onClick={sliderEvent?.slickPrev}>
                <BsChevronLeft/>
            </div>
            <div className="right-2 md:right-8 arrowDiv" onClick={sliderEvent?.slickNext}>
                <BsChevronRight/>
            </div>
        </div>
    )
}

export default RenderArrows;
