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
                    Je m&apos;appelle Steeve MOMBRUN et je suis développeur web,
                    principalement spécialisé en back-end mais avec des
                    compétences en front-end. J&apos;ai également des
                    compétences en SEO, me permettant d&apos;optimiser les sites
                    web pour améliorer leur visibilité en ligne.
                </p>
                <p className="py-2">
                    Au cours de mon parcours professionnel, j&apos;ai travaillé
                    en tant qu&apos;intégrateur web, j&apos;ai participé à des
                    projets de maintenance applicative (TMA) et j&apos;ai
                    développé une expertise dans le débogage d&apos;applications
                    web.
                </p>
                <p className="py-2">
                    Développeur web spécialisé dans le back-end, je vois chaque projet
                    comme une chance d&apos;apprendre et de me perfectionner.
                    Chaque défi est pour moi une occasion d&apos;affiner mes compétences
                    et de créer des solutions solides et évolutives. Animé par la passion
                    du code, j&apos;aborde chaque mission avec l&apos;envie de
                    m&apos;améliorer continuellement et de contribuer de manière
                    significative à la réussite des projets auxquels je participe.
                </p>
            </div>
        </section>
    );
}

export default About;
