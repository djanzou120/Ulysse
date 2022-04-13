import {SiTypescript} from "react-icons/si";

const AboutPage = () => {

    return (
        <div className="sm:mx-24 md:mx-14 lg:mx-48 md:mt-40 mx-5 mt-28 relative">
            <div id="titlePage" className="">
                <h2 className="font-medium text-3xl md:text-5xl uppercase">A propos de moi</h2>
                <img className="absolute mt-3 md:left-10 md:w-96 w-64" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div id="description" className="mt-24 mx-8">
                <span className="font-extralight text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque harum perspiciatis! Dicta optio possimus rem veritatis! Asperiores dolorum explicabo fugiat illum, maxime nam necessitatibus nihil praesentium reiciendis ullam vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur debitis doloremque eligendi illo illum ipsam nam natus nostrum, nulla optio perferendis quas quia sapiente sequi suscipit tempora ullam voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, commodi culpa, excepturi illo iusto magni, modi non nostrum nulla odit optio pariatur perspiciatis quisquam quod similique tenetur veniam voluptatibus? Possimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, cum debitis facilis hic ipsum laboriosam magni nam nemo nihil nobis omnis perspiciatis praesentium quae quam quibusdam quisquam similique tempore veritatis.</span>
            </div>
            <div id="technoList" className="mt-16 mx-14">
                <ul className="grid grid-cols-4 gap-10">
                    <li className="flex flex-col justify-center items-center space-y-3">
                        <SiTypescript className="text-7xl text-blue-700"/>
                        <span>Typescript</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage;
