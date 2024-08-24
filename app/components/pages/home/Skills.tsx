import React from "react";
import SkillIcon from "../../skillIcon/SkillIcon";

function Skills() {

    const icons = [
        "/icons/adobexd.svg",
        "/icons/bootstrap.svg",
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
                <p className="my-6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Hic numquam maiores rem ut architecto labore, magnam
                    quibusdam et esse velit quasi distinctio earum veniam
                    inventore illum nobis officiis dolores laudantium eveniet
                    ratione vero magni ducimus amet? Inventore, molestias
                    impedit aperiam quis, cum soluta neque rem cumque culpa
                    beatae nisi expedita vel perferendis illum alias, fugiat
                    eligendi corrupti. Eaque repudiandae commodi qui aut fugiat
                    voluptatum consequuntur magni praesentium saepe esse quis
                    quasi vitae sequi cupiditate temporibus similique a,
                    asperiores ex voluptates! Esse velit, dolores quas, deserunt
                    quam vel similique dicta quos facilis maxime sapiente in
                    nulla inventore nisi at doloremque! Animi.
                </p>
            </div>
        </section>
    );
}

export default Skills;
