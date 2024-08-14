import Image from "next/image";
import logo from "@/public/logo.svg";
import logoInverted from "@/public/logo-inverted.svg";
import SkillIcon from "./components/SkillIcon/SkillIcon";
import ProjectCard from "./components/ProjectCard/ProjectCard";

export default function Home() {
    const count = [
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
        "/icons/laravel.svg",
        "/icons/mongodb.svg",
        "/icons/mysql.svg",
        "/icons/nodedotjs.svg",
        "/icons/npm.svg",
        "/icons/php.svg",
        "/icons/postman.svg",
        "/icons/react.svg",
        "/icons/sqlite.svg",
        "/icons/symfony.svg",
        "/icons/trello.svg",
        "/icons/vscode-fill.svg",
        "/icons/wordpress.svg",
    ];

    return (
        <>
            <section
                id="home"
                className="flex flex-col justify-center p-2 min-h-svh bg-slate-200"
            >
                <div className="logo flex align-middle justify-center my-2">
                    <Image
                        src={logo}
                        alt="Logo du site Steeve MOMBRUN développeur Web Lyon"
                        height={192}
                        width={192}
                    ></Image>
                </div>
                <div className="section-title text-center">
                    <h1 className="text-3xl font-bold py-2">Steeve MOMBRUN</h1>
                    <h2 className="text-xl font-light py-2">Développeur Web</h2>
                </div>
                <div className="arrow text-center">v</div>
            </section>

            <section
                id="about"
                className="flex flex-col justify-center py-10 px-4 min-h-[50svh] bg-slate-50"
            >
                <div className="section-content py-2 max-w-md  self-center text-justify">
                    <div className="section-title text-center pb-5">
                        <h2 className="text-2xl font-bold">À propos</h2>
                        <span className="subtitle font-light">de moi</span>
                    </div>
                    <p className="py-2">
                        Je m&apos;appelle Steeve MOMBRUN et je suis développeur
                        web, principalement spécialisé en back-end mais avec des
                        compétences en front-end. J&apos;ai également des
                        compétences en SEO, me permettant d&apos;optimiser les
                        sites web pour améliorer leur visibilité en ligne.
                    </p>
                    <p className="py-2">
                        Au cours de mon parcours professionnel, j&apos;ai
                        travaillé en tant qu&apos;intégrateur web, j&apos;ai
                        participé à des projets de maintenance applicative (TMA)
                        et j&apos;ai développé une expertise dans le débogage
                        d&apos;applications web.
                    </p>
                </div>
            </section>

            <section
                id="projects"
                className="flex flex-col items-center py-10 px-4 min-h-svh bg-slate-200"
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

            <section
                id="skills"
                className="flex flex-col items-center justify-center py-10 px-4 min-h-[100svh] bg-slate-50 relative"
            >
                <div className="floating-items">
                    {count.map((e, i) => {
                        return <SkillIcon key={i} src={e} />;
                    })}
                </div>
                <div className="bg-slate-500/10 backdrop-blur-sm max-w-screen-sm p-8">
                    <div className="section-title text-center">
                        <span className="subtitle font-light">Mes</span>
                        <h2 className="text-2xl font-bold">Compétences</h2>
                    </div>
                    <p className="my-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Hic numquam maiores rem ut architecto labore,
                        magnam quibusdam et esse velit quasi distinctio earum
                        veniam inventore illum nobis officiis dolores laudantium
                        eveniet ratione vero magni ducimus amet? Inventore,
                        molestias impedit aperiam quis, cum soluta neque rem
                        cumque culpa beatae nisi expedita vel perferendis illum
                        alias, fugiat eligendi corrupti. Eaque repudiandae
                        commodi qui aut fugiat voluptatum consequuntur magni
                        praesentium saepe esse quis quasi vitae sequi cupiditate
                        temporibus similique a, asperiores ex voluptates! Esse
                        velit, dolores quas, deserunt quam vel similique dicta
                        quos facilis maxime sapiente in nulla inventore nisi at
                        doloremque! Animi.
                    </p>
                    <p className="my-4">
                        Quo voluptas officia similique laboriosam consequuntur
                        vero, assumenda dolor velit. Iste totam beatae ipsa at,
                        ab facere ut consectetur nam laboriosam accusamus
                        doloribus. Quod suscipit aperiam, unde perspiciatis qui
                        nemo sunt repellendus blanditiis amet quidem, labore in
                        laboriosam soluta excepturi magnam corrupti sit iste.
                        Rem recusandae consectetur qui perspiciatis ipsa fugit
                        suscipit itaque autem, obcaecati, veritatis corrupti nam
                        ut sit. Reprehenderit nemo, rerum sed iure dolorum
                        voluptates labore commodi facere inventore molestiae
                        nulla beatae laudantium asperiores velit necessitatibus
                        facilis ipsam ducimus et possimus vitae consequuntur
                        maiores ut temporibus explicabo? Doloribus ab illo,
                        consectetur cum quaerat repellendus asperiores fugiat
                        qui facere!
                    </p>
                </div>
            </section>

            <section
                id="contact"
                className="flex flex-col py-10 px-4 bg-slate-200"
            >
                <div className="section-title text-center py-2">
                    <span className="subtitle font-light">Me</span>
                    <h2 className="text-2xl font-bold">Contacter</h2>
                </div>
                <div className="section-content max-w-md self-center">
                    <p className="introduction py-2">
                        Remplissez ce formulaire et je vous recontacterais très
                        rapidement.
                    </p>
                    <div className="contact-form">
                        <form action="#">
                            <div className="form-field my-4">
                                <label htmlFor="name">Nom</label>
                                <input
                                    className="w-full outline-none p-2"
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                            </div>
                            <div className="form-field my-4">
                                <label htmlFor="email">Email</label>
                                <input
                                    className="w-full outline-none p-2"
                                    type="email"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="form-field my-4">
                                <label htmlFor="phone">Téléphone</label>
                                <input
                                    className="w-full outline-none p-2"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                />
                            </div>
                            <div className="form-field my-4">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="w-full min-h-52 outline-none p-2"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <div className="optin my-4 flex items-baseline">
                                <input
                                    type="checkbox"
                                    name="option"
                                    id="optin"
                                />
                                &nbsp;
                                <label htmlFor="optin" className="optin-rules">
                                    Je comprends et j’accepte que mes données
                                    soient enregistrées pour que je puisse être
                                    rappelé.
                                </label>
                            </div>
                            <div className="send-form-btn flex justify-center my-2">
                                <input
                                    type="submit"
                                    value="Envoyer"
                                    className="border border-solid bg-white py-2 px-5 hover:bg-slate-600 hover:text-white"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <footer id="footer" className="py-10 bg-slate-600 text-white">
                <div className="flex flex-col gap-3 items-center ">
                    <Image
                        src={logoInverted}
                        alt="Logo site du Portfolio de Steeve MOMBRUN développeur Web"
                        width={48}
                        height={48}
                    ></Image>
                    <div className="section-title text-center">
                        <h2 className="text-xl py-3">Steeve MOMBRUN</h2>
                        <p className="subtitle text-sm font-light">
                            steeve.mombrun@outlook.com
                        </p>
                        <p className="subtitle text-sm font-light">
                            06.65.75.10.77
                        </p>
                    </div>
                    <div className="copyrights">
                        Steeve MOMBRUN &copy; 2024, all rights reserved
                    </div>
                </div>
            </footer>
        </>
    );
}
