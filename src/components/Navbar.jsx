import menuIcon from '../assets/hamburger-menu.svg'

export default function Navbar() {
    const menu = document.getElementsByClassName("menu")[0];

    const toggleMenu = () => {
        menu.classList.toggle("hidden")
        menu.classList.toggle("block")
    }

    return (
        <nav className="bg-black px-5 md:px-0">
            <div className="container flex flex-wrap items-center justify-between md:max-w-screen-sm lg:max-w-screen-md xl:max-w-[1140px] md:px-0 pt-9 pb-3 md:py-9">
                <h3 className="text-white font-serif font-normal">Name Surname</h3>

                <button className="inline-block lg:hidden" onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu toggle" />
                </button>

                <ul className="menu hidden lg:block mt-4 lg:mt-0 text-center w-full lg:w-auto">
                    <li className="inline-block text-lg px-2 lg:px-4"><a className="text-grey" href="#">Articles</a></li>
                    <li className="inline-block text-lg px-2 lg:px-4"><a className="text-grey" href="#">Chats</a></li>
                    <li className="inline-block text-lg px-2 lg:px-4"><a className="text-grey" href="#">Awards</a></li>
                    <li className="inline-block text-lg px-2 lg:px-4"><a className="text-grey" href="#">About</a></li>
                </ul>

                <a className="bg-yellow font-serif hidden lg:inline-block leading-none no-underline px-4 lg:px-9 py-3 lg:py-5 text-black text-lg" href="#">Get in touch</a>
            </div>
        </nav>
    )
}
