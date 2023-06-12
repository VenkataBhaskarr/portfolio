import SectionHeader from "@/components/utils/SectionHeader";
import Project from "./Project";
import styles from './projects.module.scss';
function Projects(){
    return(
        <section id="projects" className="section-wrapper">
            <SectionHeader title="Projects" dir="r"/>
            <div className={styles.projects}>
                {
                    projects.map((project, index) => {
                        return <Project key={index} {...project}/>
                    })
                }
            </div>
        </section>
    )

}

const projects = [
    {
        title: "CrazySevers",
        imgSrc: "projects.jpg",
        code: "https://www.github.com/VenkataBhaskarr/crazy-server-architecture",
        tech: ["React", "Cpp", "Golang", "Python"],
        description:
            "This is a small project i did to learn about server architecture and which language is required to build low latency systems.",

    },
    {
        title: "The Chess",
        imgSrc: "projects.jpg",
        code: "https://www.github.com/VenkataBhaskarr/Chess",
        tech: ["Node", "Sockets", "React"],
        description:
            "Simple multiplayer chess game built with react and nodejs. This project is suggested for me by my mentor while preparing my journey to Google summer of code",
    },
    {
        title: "V-ECS",
        imgSrc: "projects.jpg",
        code: "https://www.github.com/VenkataBhaskarr/projectwork",
        tech: ["React", "Appwrite", "GPT-3.5API"],
        description:
            "This project was built in order to reduce the difficulties faced by VITAP students while ECS registrations, i am very proud of this project",

    },
    {
        title: "goto-resource",
        imgSrc: "projects.jpg",
        code: "https://www.github.com/VenkataBhaskarr/goto-resource",
        tech: ["React", "Nodejs", "MongoDB"],
        description:
            "This was my first MERN stack project.this project is useful for people who wants free resources to study🌈",
    },
]
export default Projects;