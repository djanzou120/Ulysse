import {ImGithub, ImLinkedin2, ImTwitter} from "react-icons/im";
import {FiInstagram} from "react-icons/fi";

import MenuItem from "./MenuItem";
import SocialMedia from "./SocialMedia";
import {useContext} from "react";
import {ScrollPageContext} from "../context/ScrollPageContext";

const SideBar = () => {
    const {currentPage, setCurrentPage} = useContext(ScrollPageContext)

    return (
        <div className="h-full w-32 hidden md:block fixed z-20">
            <div className="flex flex-col items-center pt-4 relative h-full">
                <div id="logo" className="text-5xl font-bold text-center h-1/6 pt-5">
                    D.
                </div>
                <div id="menu" className="relative h-4/6 flex flex-col">
                    <ul className="flex flex-col uppercase space-y-24 text-sm font-light h-full mt-16">
                        <MenuItem onClick={() => setCurrentPage(0)} current={currentPage == 0}>
                            Competences
                        </MenuItem>
                        <MenuItem onClick={() => setCurrentPage(1)} current={currentPage == 1}>
                            A propos
                        </MenuItem>
                        <MenuItem onClick={() => setCurrentPage(2)} current={currentPage == 2}>
                            Experience
                        </MenuItem>
                        <MenuItem onClick={() => setCurrentPage(3)} current={currentPage == 3}>
                            Contact
                        </MenuItem>
                    </ul>
                </div>
                <div id="socialMedia" className="relative h-2/6 flex flex-col justify-center items-center">
                    <span className="h-20 bg-green-500 w-0.5 -mt-5"/>
                    <ul className="text-green-500 text-2xl flex flex-col space-y-4 my-7">
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
                    <span className="h-16 bg-green-500 w-0.5 flex justify-center items-center"/>
                </div>
            </div>
        </div>
    )
}

export default SideBar;
