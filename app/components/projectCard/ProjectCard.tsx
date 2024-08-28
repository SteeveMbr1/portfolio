import Image from "next/image";
import React from "react";
import './ProjectCard.scss';
import { ProjectType } from "@/app/types/ProjectType.js";



function ProjectCard({ project } : { project: ProjectType }) {
    return (
        <figure
            key={project.id}
            className="relative project-card flex flex-col justify-end py-3 md:max-w-[400px] lg:max-w-[534px] drop-shadow-lg"
        >
            <Image className="project-card-img aspect-[4/3]" src={project.images[0]} alt={project.name} width={400} height={300}></Image>
            <figcaption className="group absolute flex bg-slate-50 p-2 bg-opacity-80 hover:bg-opacity-95 w-full max-h-[300px] overflow-y-auto">
                <div>
                    <div className="project_title font-bold py-2">
                        {project.name}
                    </div>
                    <div className="project_short-description font-light">
                        <p className="py-2">
                            {project.description.short}
                        </p>
                    </div>
                    <div className="project_details overflow-hidden max-h-0 group-hover:max-h-96 transition-all">
                        <div className="project_long-description font-light">
                            <p className="py-2">
                                {project.description.long}
                            </p>
                        </div>
                        <div className="skill-tags py-5">
                            <p className="skill-intro font-light py-2">
                                Compétences et technologies utilisées :
                            </p>
                            <ul className="flex flex-row flex-wrap gap-2 text-xs">
                                {project.tags?.map((tag, i) => {
                                    return (
                                        <li key={i} className="rounded-lg bg-amber-400 px-2 min-w-10 text-center">
                                            {tag}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <a className="see-more-btn block rounded-full border border-slate-500 size-10 min-w-10 text-center content-center self-end" href={project.link}>
                    {"->"}
                </a>
            </figcaption>
        </figure>
    );
}

export default ProjectCard;
