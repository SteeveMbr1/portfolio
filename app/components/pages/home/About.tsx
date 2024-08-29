import React from "react";

function About() {
    return (
        <section
            id="about"
            className="flex flex-col py-10 px-6 min-h-[50svh] bg-slate-50"
        >
            <div className="section-content max-w-md  m-auto text-justify">
                <div className="section-title text-center pb-5">
                    <h2 className="text-2xl font-bold">À propos</h2>
                    <span className="subtitle font-light">de moi</span>
                </div>
                <p className="py-2">
                    Je suis Steeve MOMBRUN, développeur web spécialisé en back-end avec des compétences en front-end. 
                </p>
                <p className="py-2">
                    Chaque projet est pour moi une occasion d&apos;apprendre, d&apos;améliorer mes compétences avec le but de créer des solutions durables et performantes.
                </p>
            </div>
        </section>
    );
}

export default About;
