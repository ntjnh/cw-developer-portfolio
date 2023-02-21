export default function Project(props) {
    return (
        <div className="project mb-10 md:mb-0">
            <img className="mb-6" src={`./src/assets/${props.img}`} alt={props.title} />
            <h2 className="font-serif font-normal leading-snug mb-2 text-3xl md:text-4xl text-white">{props.title} &#8594;</h2>
            <p className="max-w-[530px] text-lg">{props.description}</p>
        </div>
    )
}
