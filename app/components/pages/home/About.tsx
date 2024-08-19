import React from "react";

function About() {
    return (
        <section
            id="about"
            className="flex flex-col py-10 min-h-[50svh] bg-slate-50"
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
            </div>
        </section>
    );
}

export default About;
