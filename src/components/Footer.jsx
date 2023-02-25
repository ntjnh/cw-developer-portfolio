import twitter from '../assets/social-icons/twitter.svg'
import linkedin from '../assets/social-icons/linkedin.svg'
import github from '../assets/social-icons/github.svg'

export default function Footer() {
    return (
        <footer className="bg-darkgrey px-5 md:px-0 py-6">
            <div className="container flex align-center justify-between md:max-w-screen-sm lg:max-w-screen-md xl:max-w-[1140px]">
                <h3 className="font-serif font-normal text-white">Name Surname</h3>

                <ul className="leading-none">
                    <li className="inline-block px-2">
                        <a href="#">
                            <img src={twitter} />
                        </a>
                    </li>
                    <li className="inline-block px-2">
                        <a href="#">
                            <img src={linkedin} />
                        </a>
                    </li>
                    <li className="inline-block px-2">
                        <a href="#">
                            <img src={github} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
