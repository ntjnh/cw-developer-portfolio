export default function Footer() {
    return (
        <footer className="bg-darkgrey px-5 md:px-0 py-6">
            <div className="container flex align-center justify-between md:max-w-[1140px]">
                <h3 className="font-serif font-normal text-white">Name Surname</h3>

                <ul className="leading-none">
                    <li className="inline-block px-2">
                        <a href="#">
                            <img src="./src/assets/social-icons/twitter.svg" />
                        </a>
                    </li>
                    <li className="inline-block px-2">
                        <a href="#">
                            <img src="./src/assets/social-icons/linkedin.svg" />
                        </a>
                    </li>
                    <li className="inline-block px-2">
                        <a href="#">
                            <img src="./src/assets/social-icons/github.svg" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
