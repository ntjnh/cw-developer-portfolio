export default function Footer() {
    return (
        <footer className="bg-darkgrey py-9">
            <div className="container flex align-center justify-between">
                <h3 className="font-serif font-normal text-white">Name Surname</h3>

                <ul>
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
