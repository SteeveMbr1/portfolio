"use client"

import React from 'react'

function ContactForm() {

    async function sendForm(formData :FormData) {

        fetch('/mail',{
            method: 'POST',
            body: formData
        })
    }

    return (
        <form action={sendForm}>
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
                <input type="checkbox" name="concent" id="consent" />
                &nbsp;
                <label htmlFor="consent" className="consent-rules">
                    Je comprends et j’accepte que mes données soient
                    enregistrées pour que je puisse être rappelé.
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
    )
}

export default ContactForm