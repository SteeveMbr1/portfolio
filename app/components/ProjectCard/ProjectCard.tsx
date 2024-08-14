import Image from "next/image";
import React from "react";
import './ProjectCard.scss';


function ProjectCard({ key, src, alt}: { key: number; src: string, alt: string }) {
    return (
        <figure
            key={key}
            className="relative project-card flex flex-col justify-end py-3 md:max-w-[450px] lg:max-w-[534px] drop-shadow-lg"
        >
            <Image className="project-card-img" src={src} alt={alt} width={400} height={400}></Image>
            <figcaption className="group absolute flex bg-slate-50 p-2 bg-opacity-80 hover:bg-opacity-95 w-full ">
                <div>
                    <div className="project_title font-bold py-2">
                        Projet n°{key}
                    </div>
                    <div className="project_short-description font-light">
                        Project short description in one line
                    </div>
                    <div className="project_details overflow-hidden max-h-0 group-hover:max-h-96 transition-all">
                        <div className="project_long-description font-light">
                            Project long description in multilines. The we add
                            some content to grow the line
                        </div>
                        <div className="skill-tags py-5">
                            <p className="skill-intro font-light py-2">
                                Compétences et technologies utilisées :
                            </p>
                            <ul className="flex gap-2 text-xs">
                                <li className="rounded-lg bg-amber-400 px-2 min-w-10 text-center">
                                    HTML
                                </li>
                                <li className="rounded-lg bg-amber-400 px-2 min-w-10 text-center">
                                    CSS
                                </li>
                                <li className="rounded-lg bg-amber-400 px-2 min-w-10 text-center">
                                    Js
                                </li>
                                <li className="rounded-lg bg-amber-400 px-2 min-w-10 text-center">
                                    ReactJS
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="see-more-btn rounded-full border size-10 text-center self-end">
                    {"->"}
                </button>
            </figcaption>
        </figure>
    );
}

export default ProjectCard;
