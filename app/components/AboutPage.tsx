import {
    SiTypescript,
    SiNextdotjs,
    SiReact,
    SiPhp,
    SiJava,
    SiLaravel,
    SiCodeigniter,
    SiPrestashop,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiMysql
} from "react-icons/si";

const AboutPage = () => {

    return (
        <div className="sm:mx-24 md:mx-12 lg:mx-32 md:mt-36 mx-4 mt-24 relative lg:flex lg:flex-col lg:mt-40">
            <div id="titlePage" className="">
                <h2 className="font-medium text-3xl md:text-5xl uppercase">A propos de moi</h2>
                <img className="absolute mt-3 md:left-10 md:w-96 w-64" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div id="description" className="mt-12 md:mx-8 lg:mt-20">
                <span className="font-extralight text-justify text-sm sm:text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </span>
            </div>
            <div id="technoList" className="mt-8 md:mt-12 md:mx-14 lg:mt-16">
                <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-10 text-center">
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiTypescript className="text-6xl sm:text-7xl text-blue-700 bg-white rounded-lg"/>
                        <span className="text-sm sm:text-md font-extralight">Typescript</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiNodedotjs className="text-6xl sm:text-7xl text-green-700"/>
                        <span className="text-sm sm:text-md font-extralight">Node.js</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiNextdotjs className="text-6xl sm:text-7xl text-black bg-white rounded-full"/>
                        <span className="text-sm sm:text-md font-extralight">Next.js</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiReact className="text-6xl sm:text-7xl text-blue-500"/>
                        <span className="text-sm sm:text-md font-extralight">React Native</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiPhp className="text-6xl sm:text-7xl text-indigo-700"/>
                        <span className="text-sm sm:text-md font-extralight">PHP</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiPrestashop className="text-6xl sm:text-7xl text-black dark:text-white"/>
                        <span className="text-sm sm:text-md font-extralight">PrestaShop</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiLaravel className="text-6xl sm:text-7xl text-red-600"/>
                        <span className="text-sm sm:text-md font-extralight">Laravel</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiCodeigniter className="text-6xl sm:text-7xl text-orange-600"/>
                        <span className="text-sm sm:text-md font-extralight">Code Igniter</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiJava className="text-6xl sm:text-7xl text-red-700"/>
                        <span className="text-sm sm:text-md font-extralight">Java</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiMysql className="text-6xl sm:text-7xl text-blue-500"/>
                        <span className="text-sm sm:text-md font-extralight">MySQL</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiPostgresql className="text-6xl sm:text-7xl text-blue-400"/>
                        <span className="text-sm sm:text-md font-extralight">PostgreSQL</span>
                    </li>
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiMongodb className="text-6xl sm:text-7xl text-green-600"/>
                        <span className="text-sm sm:text-md font-extralight">Mongo DB</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default AboutPage;
