import Walmart from "../assets/logos/Walmart"
import JPMorgan from "../assets/logos/JPMorgan"
import Visa from "../assets/logos/Visa"
import Tinder from "../assets/logos/Tinder"
import Samsung from "../assets/logos/Samsung"
import Verizon from "../assets/logos/Verizon"

export default function Logos() {
    return (
        <section className="bg-black px-5 md:px-0 pt-7 md:py-9">
            <div className="container align-center flex flex-wrap justify-center lg:justify-between max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-[1140px]">
                <Walmart />
                <JPMorgan />
                <Visa />
                <Tinder />
                <Samsung />
                <Verizon />
            </div>
        </section>
    )
}
