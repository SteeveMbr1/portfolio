import React from "react";
import SkillIcon from "../../skillIcon/SkillIcon";
import FlipCard from "../../flipCard/FlipCard";

function Skills() {
    const icons = [
        "/icons/adobexd.svg",
        "/icons/composer.svg",
        "/icons/css3.svg",
        "/icons/express.svg",
        "/icons/figma.svg",
        "/icons/git.svg",
        "/icons/github.svg",
        "/icons/html5.svg",
        "/icons/javascript.svg",
        "/icons/mongodb.svg",
        "/icons/mysql.svg",
        "/icons/nodedotjs.svg",
        "/icons/npm.svg",
        "/icons/php.svg",
        "/icons/postman.svg",
        "/icons/react.svg",
        "/icons/sqlite.svg",
        "/icons/trello.svg",
        "/icons/vscode-fill.svg",
        "/icons/wordpress.svg",
        "icons/tailwindcss.svg",
    ];

    const skillCards = [
        {
            name: "Langages Web",
            items: ["HTML5", "CSS3"],
        },
        {
            name: "Langages de programmation",
            items: ["JavaScript", "PHP"],
        },
        {
            name: "Frameworks et bibliothèques",
            items: ["Express", "React", "TailwindCSS"],
        },
        {
            name: "Outils de versionning",
            items: ["Git", "GitHub"],
        },
        {
            name: "Outils de développement",
            items: ["Composer", "npm", "Postman", "VScode", "Trello"],
        },
        {
            name: "Base de données",
            items: ["MongoDB", "MySQL", "SQLite"],
        },
        {
            name: "Outils de conception",
            items: ["AdobeXD", "Figma"],
        },
        {
            name: "CMS",
            items: ["WordPress"],
        },
        {
            name: "Environnements d'exécution",
            items: ["Node.js"],
        },
    ];

    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center py-10 min-h-[100svh] bg-slate-50 relative"
        >
            <div className="floating-items">
                {icons.map((icon, key) => {
                    return <SkillIcon key={key} id={key} src={icon} />;
                })}
            </div>
            <div className="bg-slate-500/5 backdrop-blur-sm max-w-screen-sm m-auto p-8">
                <div className="section-title text-center">
                    <span className="subtitle font-light">Mes</span>
                    <h2 className="text-2xl font-bold">Compétences</h2>
                </div>
                <div className="py-4">
                    <p className="py-2">
                        Au cours de ma formation, j&apos;ai acquis diverses
                        compétences grâce aux projets sur lesquels j&apos;ai
                        travaillé.
                    </p>
                    <p className="py-2">
                        Toutefois, les technologies évoluant très rapidement, il
                        est essentiel de rester constamment à jour. Pour cela,
                        je réalise une veille régulière sur les réseaux sociaux,
                        ce qui me permet également d&apos;acquérir de nouvelles
                        compétences.
                    </p>
                    <p className="py-2">
                        À ce jour, ces différentes approches m&apos;ont permis
                        de maîtriser les technologies et outils suivantes :
                    </p>
                </div>
                <div className="skill-cards grid grid-cols-3 grid-flow-row gap-2">
                    {skillCards.map((skill, i) => {
                        return (
                            <FlipCard
                                key={i}
                                name={skill.name}
                                items={skill.items}
                            ></FlipCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Skills;
