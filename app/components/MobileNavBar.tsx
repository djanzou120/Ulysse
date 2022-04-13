import {useState} from "react";
import Link from "next/link";
import {FiInstagram, FiMenu} from "react-icons/fi";
import {VscClose} from "react-icons/vsc";
import {ImGithub, ImLinkedin2, ImTwitter} from "react-icons/im";

import SocialMedia from "./SocialMedia";
import ThemeToggle from "./ThemeToggle";

const MobileNavBar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <div className="w-full h-20 md:hidden fixed z-20">
            <div className="flex flex-row justify-between px-10 items-center h-full">
                <div id="logo" className="text-5xl font-bold">
                    D.
                </div>
                <div id="mobileMenu" className="text-4xl flex flex-row space-x-8 items-center">
                    <ThemeToggle/>
                    {
                        menuOpen
                            ?
                            <VscClose onClick={() => setMenuOpen(false)}/>
                            :
                            <FiMenu onClick={() => setMenuOpen(true)}/>
                    }
                </div>
            </div>

            {/*  Mobile Menu  */}
            <div className={`${menuOpen ? "block" : "hidden"} h-full w-screen fixed bg-white dark:bg-black`}>
                <div className="flex justify-center items-center h-96 mt-10">
                    <ul className="flex flex-col justify-around text-center h-full text-lg font-medium uppercase">
                        <li>
                            <Link href="#competences">
                                <a>Competences</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#about">
                                <a>A propos</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#experience">
                                <a>Experience</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="my-12">
                    <ul className="flex flex-row justify-evenly text-4xl text-green-500">
                        <SocialMedia href="">
                            <ImGithub/>
                        </SocialMedia>
                        <SocialMedia href="">
                            <ImLinkedin2/>
                        </SocialMedia>
                        <SocialMedia href="">
                            <FiInstagram/>
                        </SocialMedia>
                        <SocialMedia href="">
                            <ImTwitter/>
                        </SocialMedia>
                    </ul>
                </div>
                <div className="flex justify-center py-6 px-12">
                    <button className="py-3 px-10 border border-green-600 border-2 rounded-full font-light uppercase text-sm">Telecharger mon CV</button>
                </div>
                <div className="mt-10 text-center relative h-10 flex items-center justify-center">
                    <div className="h-0.5 w-full bg-green-700"/>
                    <span className="absolute px-4 dark:bg-black bg-white">djanzou120@yahoo.fr</span>
                </div>
            </div>

        </div>
    )
}

export default MobileNavBar;
