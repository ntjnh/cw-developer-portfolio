import Project from './Project'

export default function Projects(props) {
    return (
        <section className="projects bg-black">
            <Project
                img="spense.png"
                title="Spense.com"
                description="Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc"
            />
            <Project
                img="yelpcamp.png"
                title="YelpCamp.com"
                description="Allowing backpack travellers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favourite in 2021."
            />
        </section>
    )
}