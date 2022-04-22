

const ContactPage = () => {

    return (
        <div className="flex flex-col items-center justify-center">
            <div id="pageTitle" className="relative">
                <h2 className="text-3xl md:text-5xl font-medium uppercase">Me contacter</h2>
                <img className="absolute mt-1 md:w-96 w-full" src="/path.png" alt="underlinerTitle"/>
            </div>
            <div className="mt-14 mx-5 md:mx-32 md:mt-20">
                <h6 className="font-extralight text-sm md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consequatur dignissimos expedita facilis fugiat harum hic, incidunt inventore magnam magni minima possimus quae. Ab cupiditate exercitationem id odit tenetur.</h6>
            </div>
            <div id="contactForm" className="flex flex-col mt-10 mx-5 md:mx-0 md:mt-16 md:w-1/2">
                <form className="space-y-5 md:mx-10 md:space-y-7 lg:mx-20">
                    <input type="text" className="contactInput" placeholder="Nom" />
                    <input type="email" className="contactInput" placeholder="Email" />
                    <textarea className="contactInput h-40" placeholder="Message"></textarea>
                    <div className="flex justify-center pt-10 md:pt-5">
                        <button className="rounded-full bg-green-700 text-white uppercase px-10 py-4 font-light text-sm">Envoyer mon message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;
