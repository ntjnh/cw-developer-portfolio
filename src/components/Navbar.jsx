export default function Navbar() {
    return (
        <nav>
            <h3 className="name">Name Surname</h3>

            <ul className="menu">
                <li><a href="#">Articles</a></li>
                <li><a href="#">Chats</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">About</a></li>
            </ul>

            <a className="contact-button" href="#">Get in touch</a>
        </nav>
    )
}
