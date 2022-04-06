import Link from "next/link";
import {useRouter} from "next/router";

const MenuItem = ({children, href} : { children : any, href : string }) => {

    const {asPath} = useRouter();
    const currentPath = asPath.replace("/", "");

    return (
        <li className="-rotate-90 relative cursor-pointer">
            <Link href={href}>
                {
                    (currentPath == href || (!currentPath && href == "#competence"))
                        ?
                        <a>
                            <span className="z-20 block">{children}</span>
                            <span className="z-10 w-10 h-10 rounded-full bg-green-400 absolute -top-1/2 right-1/3"/>
                        </a>
                        :
                        <a className="hover:line-through line decoration-green-400 decoration-2">
                            {children}
                        </a>
                }
            </Link>
        </li>
    )
}

export default MenuItem;
