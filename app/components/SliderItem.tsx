import Image from "next/image";


const SliderItem = ({data} : any) => {

    return (
        <div>
            <div className="flex justify-center">
                <Image width={800} height={450} src="/Rectangle.png" alt="underlinerTitle"/>
            </div>
            <div className="flex flex-col justify-center uppercase my-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center md:leading-snug">CleanDev Paiement Solution</h2>
                <div>
                    <ul className="flex flex-row list-disc mt-5 font-light space-x-8 justify-center text-sm">
                        <li className="list-none">CleanDev</li>
                        <li>Laravel</li>
                        <li>2019</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SliderItem;
