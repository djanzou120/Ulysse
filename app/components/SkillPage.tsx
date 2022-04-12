import {BiChevronRight} from "react-icons/bi";


const SkillPage = () => {

    return (
        <div className="flex flex-col items-center justify-center h-full md:gap-y-10 gap-y-7">
            <div id="profileImg" className="mt-3 rounded-full">
                <img src="profile.png" alt="Image profile"/>
            </div>
            <h6 className="text-green-400">Yo! Je suis</h6>
            <h4 className="uppercase text-4xl font-light">Djanzou Junior</h4>
            <div className="relative">
                <h3 className="uppercase md:text-4xl text-2xl font-bold">Developpeur Full Stack</h3>
                <img className="absolute md:-right-12 mt-1 -right-1 w-48 md:w-full" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div id="description" className="md:pt-20 md:px-20 pt-12 px-8">
                <span className="text-justify break-words">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aut dignissimos, dolorum enim perspiciatis similique tenetur! Itaque maxime praesentium provident! Quod, quos, vero. Blanditiis doloribus in non repudiandae tenetur!
                </span>
            </div>
            <div id="workTogether" className="flex flex-row items-center gap-x-12 mt-10">
                <span className="uppercase font-medium underline underline-offset-10 decoration-green-600">travaillons ensemble</span>
                <div className="bg-green-600 rounded-full dark:text-black text-white text-5xl p-1 workTogether">
                    <BiChevronRight/>
                </div>
            </div>
        </div>
    )
}

export default SkillPage;
