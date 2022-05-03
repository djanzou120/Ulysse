import Link from "next/link";
import {useRouter} from "next/router";
import {useContext} from "react";
import {ScrollPageContext} from "../context/ScrollPageContext";

const MenuItem = ({children, current, onClick} : { children : any, current : boolean, onClick : () => void }) => {

    const {asPath} = useRouter();

    return (
        <li className="-rotate-90 relative cursor-pointer" onClick={onClick}>
            {
                (current)
                    ?
                    <a>
                        <span className="z-20 block absolute -bottom-3 font-medium">{children}</span>
                        <span className="z-10 w-10 h-10 rounded-full bg-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    </a>
                    :
                    <a className="hover:line-through line decoration-green-400 decoration-2">
                        {children}
                    </a>
            }
        </li>
    )
}

export default MenuItem;
