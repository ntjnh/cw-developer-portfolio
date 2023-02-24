import menuIcon from '../assets/hamburger-menu.svg'

export default function Navbar() {
    const menu = document.getElementsByClassName("menu")[0];

    const toggleMenu = () => {
        menu.classList.toggle("hidden")
        menu.classList.toggle("block")
    }

    return (
        <nav className="bg-black">
            <div className="container flex flex-wrap items-center justify-between md:max-w-[1140px] px-5 md:px-0 pt-9 pb-3 md:py-9">
                <h3 className="text-white font-serif font-normal">Name Surname</h3>

                <button className="inline-block md:hidden" onClick={toggleMenu}>
                    <img src={menuIcon} alt="menu toggle" />
                </button>

                <ul className="menu hidden md:block mt-4 md:mt-0 text-center w-full">
                    <li className="inline-block text-lg px-2 md:px-4"><a className="text-grey" href="#">Articles</a></li>
                    <li className="inline-block text-lg px-2 md:px-4"><a className="text-grey" href="#">Chats</a></li>
                    <li className="inline-block text-lg px-2 md:px-4"><a className="text-grey" href="#">Awards</a></li>
                    <li className="inline-block text-lg px-2 md:px-4"><a className="text-grey" href="#">About</a></li>
                </ul>

                <a className="bg-yellow font-serif hidden md:inline-block leading-none no-underline px-9 py-5 text-black text-lg" href="#">Get in touch</a>
            </div>
        </nav>
    )
}
