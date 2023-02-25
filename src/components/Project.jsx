export default function Project(props) {
    return (
        <div className="project mb-10 lg:mb-0 w-full lg:w-[48%]">
            <img className="mb-6 md:mb-8 lg:md-6 w-full lg:w-auto" src={`./src/assets/${props.img}`} alt={props.title} />
            <h2 className="font-serif font-normal leading-snug mb-2 md:mb-4 lg:mb-2 text-3xl md:text-4xl text-white">{props.title} &#8594;</h2>
            <p className="lg:max-w-[530px] text-base md:text-lg">{props.description}</p>
        </div>
    )
}
