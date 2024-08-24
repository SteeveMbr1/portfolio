import Image from "next/image";
import logoInverted from "@/public/logo-inverted.svg";


function Footer() {
    return (
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
    );
}

export default Footer;
