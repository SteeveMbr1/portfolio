import Image from "next/image";
import logo from "@/public/logo.svg";
import arrow from "@/public/down-arrow.svg"
import Link from "next/link";

function Home() {
    return (
        <section
            id="home"
            className="flex flex-col justify-center p-2 min-h-svh bg-slate-200"
        >
            <div className="logo m-auto">
                <Image
                    src={logo}
                    alt="Logo du site Steeve MOMBRUN développeur Web Lyon"
                    height={192}
                    width={192}
                    priority
                ></Image>
            </div>
            <div className="section-title text-center">
                <h1 className="text-3xl font-bold py-2">Steeve MOMBRUN</h1>
                <h2 className="text-xl font-light py-2">Développeur Web</h2>
            </div>
            <div className="m-auto">
                <Link href={`#about`}>
                    <Image
                        className="arrow"
                        src={arrow}
                        alt="see more below button"
                        width={48}
                    ></Image>
                </Link>
            </div>
        </section>
    );
}

export default Home;