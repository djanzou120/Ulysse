import {ReactChildren} from "react";


const PageScrollElement = ({children} : {children : any}) => {

    return (
        <div className="component md:mx-28 md:my-28 mx-4 my-20 h-5/6 relative">
            {children}
        </div>
    )
}

export default PageScrollElement;
