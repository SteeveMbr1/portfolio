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
                    Je m&apos;appelle Steeve MOMBRUN, développeur web spécialisé principalement en back-end, avec des compétences également en front-end. En parallèle, je possède une expertise en SEO, me permettant d&apos;optimiser les sites web pour améliorer leur visibilité en ligne.
                </p>
                <p className="py-2">
                    Pour moi, chaque projet représente une opportunité d&apos;apprendre et de me perfectionner, d&apos;affiner mes compétences et de créer des solutions robustes et évolutives. Passionné par le code, j&apos;aborde chaque mission avec l&apos;ambition de progresser continuellement et de contribuer de manière significative à la réussite des projets auxquels je participe.
                </p>
            </div>
        </section>
    );
}

export default About;
