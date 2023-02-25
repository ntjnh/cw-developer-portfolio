import menuIcon from '../assets/hamburger-menu.svg'

export default function Navbar() {
    const toggleMenu = () => {
        const items = document.getElementById("toggle-items")

        items.classList.toggle("hidden")
        items.classList.toggle("flex")
    }

    return (
        <nav className="bg-black px-5 md:px-0">
            <div className="container flex flex-wrap items-center justify-between md:max-w-screen-sm lg:max-w-screen-md xl:max-w-[1140px] md:px-0 pt-9 pb-3 md:py-9">
                <h3 className="text-white font-serif font-normal">Name Surname</h3>

                <button className="inline-block lg:hidden" onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu toggle" />
                </button>

                <div id="toggle-items" className="hidden lg:flex mt-4 lg:mt-0 mx-auto lg:mx-0 flex-wrap items-center justify-between w-max md:w-4/5 lg:w-2/3">
                    <ul className="inline-block text-center">
                        <li className="inline-block text-md lg:text-lg px-2 lg:px-4"><a className="text-grey" href="#">Articles</a></li>
                        <li className="inline-block text-md lg:text-lg px-2 lg:px-4"><a className="text-grey" href="#">Chats</a></li>
                        <li className="inline-block text-md lg:text-lg px-2 lg:px-4"><a className="text-grey" href="#">Awards</a></li>
                        <li className="inline-block text-md lg:text-lg px-2 lg:px-4"><a className="text-grey" href="#">About</a></li>
                    </ul>

                    <a className="bg-yellow font-serif inline-block leading-none no-underline mt-4 md:mt-0 px-4 lg:px-7 py-3 md:py-2 lg:py-3 text-black text-sm lg:text-lg" href="#">Get in touch</a>
                </div>
            </div>
        </nav>
    )
}
