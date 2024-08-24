import React from "react";
import ContactForm from "../../contactForm/ContactForm";

function Contact() {
    return (
        <section id="contact" className="flex flex-col py-10 px-6 bg-slate-200">
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
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
}

export default Contact;
