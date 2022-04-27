import {BsChevronLeft, BsChevronRight} from "react-icons/bs";


const RenderArrows = () => {

    return (
        <div className="absolute h-full w-2/3 translate-x-1/4 translate-y-1/3 z-20">
            <div className="left-8 arrowDiv">
                <BsChevronLeft/>
            </div>
            <div className="right-8 arrowDiv">
                <BsChevronRight/>
            </div>
        </div>
    )
}

export default RenderArrows;
