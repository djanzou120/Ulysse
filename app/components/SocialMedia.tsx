import Link from "next/link"

const SocialMedia = ({children, href} : { children : any, href : string }) => {
    return (
        <li className="cursor-pointer hover:scale-150 transition duration-200">
            <Link href={href}>
                <a>
                    {children}
                </a>
            </Link>
        </li>
    )
}

export default SocialMedia;
