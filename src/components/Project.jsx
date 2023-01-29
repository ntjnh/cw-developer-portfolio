export default function Project(props) {
    return (
        <div className="project">
            <img src={`./src/assets/${props.img}`} alt="" />
            <h2>{props.title} &#8594;</h2>
            <p>{props.description}</p>
        </div>
    )
}
