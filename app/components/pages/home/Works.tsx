import { randomUUID, UUID } from "node:crypto";
import ProjectCard from "../../projectCard/ProjectCard";
import { ProjectType } from "@/app/types/ProjectType.js";

function Works() {
    const projects = Array<ProjectType>(2).fill({
        id: randomUUID(),
        name: "Kasa",
        description: {
            short: "Courte description du projet Kasa",
            long: "Long description du projet Kasa, pour expliquer comment il a été réalisé",
        },
        link: "https://oc-project-kasa-steeve-mbr1.vercel.app/",
        images: ["/images/projects/kasa/home.png"],
        tags: ["HTML", "CSS", "Js", "ReactJS"],
    });

    return (
        <section id="projects" className="flex flex-col items-center py-10 px-6 bg-slate-200" >
            <div className="section-content">
                <div className="section-title text-center pb-5">
                    <span className="subtitle font-light">Mes</span>
                    <h2 className="text-2xl font-bold">Réalisations</h2>
                </div>
                <div className="project-cards flex flex-wrap justify-center max-w-screen-xl gap-3">
                    {projects.map((e, i) => {
                        return <ProjectCard key={i} project={e} />;
                    })}
                </div>
            </div>
        </section>
    );
}

export default Works;
