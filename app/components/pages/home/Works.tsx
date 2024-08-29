"use client"

import ProjectCard from "../../projectCard/ProjectCard";
import { ProjectType } from "@/app/types/ProjectType.js";
import { useEffect, useState } from "react";

function Works() {
    const [projects, setProjects] = useState<ProjectType[]>([])

    useEffect(() => {
        fetch("/projects.json")
            .then(r => r.json())
            .then(r => setProjects(r));
    }, []);


    return (
        <section id="projects" className="flex flex-col items-center py-10 px-6 bg-slate-200" >
            <div className="section-content">
                <div className="section-title text-center pb-5">
                    <span className="subtitle font-light">Mes</span>
                    <h2 className="text-2xl font-bold">Réalisations</h2>
                </div>
                <div className="my-6 max-w-md  m-auto text-justify">
                    <p className="text-center">Voici quelques projets sur lesquels j&apos;ai travaillé ou que je développe actuellement :</p>
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
