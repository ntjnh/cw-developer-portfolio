import Tinder from "../assets/logos/Tinder"

export default function Logos() {
    return (
        <section className="bg-black px-5 md:px-0 py-7 md:py-9">
            <div className="container align-center flex flex-wrap justify-around md:justify-center lg:justify-between md:max-w-screen-sm lg:max-w-screen-md xl:max-w-[1140px]">
                <img className="inline-block px-8 lg:px-0 mb-4 md:mb-6 lg:my-0" src="./src/assets/logos/walmart.svg" />
                <img className="inline-block px-8 lg:px-0 mb-4 md:mb-6 lg:my-0" src="./src/assets/logos/jpmorgan.svg" />
                <img className="inline-block px-8 lg:px-0 mb-4 md:mb-6 lg:my-0" src="./src/assets/logos/visa.svg" />
                <Tinder />
                <img className="inline-block px-8 lg:px-0" src="./src/assets/logos/samsung.svg" />
                <img className="inline-block px-8 lg:px-0" src="./src/assets/logos/verizon.svg" />
            </div>
        </section>
    )
}
