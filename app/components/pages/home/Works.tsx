import React from 'react'
import ProjectCard from '../../ProjectCard/ProjectCard';

function Works() {

    const count = Array(2).fill(0);

  return (
    <section
                id="projects"
                className="flex flex-col items-center py-10 bg-slate-200"
            >
                <div className="section-content">
                    <div className="section-title text-center pb-5">
                        <span className="subtitle font-light">Mes</span>
                        <h2 className="text-2xl font-bold">Réalisations</h2>
                    </div>
                    <div className="project-cards flex flex-wrap justify-center max-w-screen-xl gap-3">
                        {count.map((e, i) => {
                            return (
                                <ProjectCard
                                    key={i}
                                    src={`https://picsum.photos/id/${
                                        i * i
                                    }/400/350`}
                                    alt="Project name"
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
  )
}

export default Works