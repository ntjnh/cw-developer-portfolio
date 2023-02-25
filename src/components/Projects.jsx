import Project from './Project'

export default function Projects(props) {
    return (
        <section className="projects bg-black px-5 md:px-0 pt-16 pb-10 lg:py-20">
            <div className="container flex flex-wrap justify-between md:max-w-screen-sm lg:max-w-screen-md xl:max-w-[1140px]">
                <Project
                    img="spense.png"
                    title="Spense.com"
                    description="Rethinking the way writers get paid, an open-source platform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc"
                />
                <Project
                    img="yelpcamp.png"
                    title="YelpCamp.com"
                    description="Allowing backpack travelers to perfectly plan their trip through an open-source platform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowd's favourite in 2021."
                />
            </div>
        </section>
    )
}