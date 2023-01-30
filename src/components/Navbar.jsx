export default function Navbar() {
    return (
        <nav className="bg-black">
            <h3 className="text-white font-serif font-normal">Name Surname</h3>

            <ul className="menu">
                <li><a className="text-grey" href="#">Articles</a></li>
                <li><a className="text-grey" href="#">Chats</a></li>
                <li><a className="text-grey" href="#">Awards</a></li>
                <li><a className="text-grey" href="#">About</a></li>
            </ul>

            <a className="bg-yellow no-underline text-black" href="#">Get in touch</a>
        </nav>
    )
}
