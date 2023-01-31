export default function Navbar() {
    return (
        <nav className="bg-black">
            <div className="container flex items-center justify-between py-9">
                <h3 className="text-white font-serif font-normal">Name Surname</h3>

                <ul className="menu">
                    <li className="inline-block text-lg px-4"><a className="text-grey" href="#">Articles</a></li>
                    <li className="inline-block text-lg px-4"><a className="text-grey" href="#">Chats</a></li>
                    <li className="inline-block text-lg px-4"><a className="text-grey" href="#">Awards</a></li>
                    <li className="inline-block text-lg px-4"><a className="text-grey" href="#">About</a></li>
                </ul>

                <a className="bg-yellow font-serif inline-block no-underline px-8 py-4 text-black" href="#">Get in touch</a>
            </div>
        </nav>
    )
}
