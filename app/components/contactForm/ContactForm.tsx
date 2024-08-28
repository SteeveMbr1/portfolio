"use client"

import React from 'react'

const formFileds = [
    "name",
    "email",
    "phone",
    "message",
    "consent"
];

function ContactForm() {

    function formValidation(formData :FormData) {

        for (const field of formFileds) {            
            if ( !formData.has(field) || formData.get(field) == "" )
                return false
        }
        return true;
    }

    async function sendForm(formData :FormData) {
        if ( ! formValidation(formData) )
            return window.alert("Merci de remplir tous les champs du formulaire");
        try {
            const res = await fetch('/api/mail',{
                method: 'POST',
                body: formData
            })
            const json = await res.json()
            window.alert(json.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form action={sendForm}>
            <div className="form-field my-4">
                <label htmlFor="name">Nom<span className='text-red-600'>*</span></label>
                <input
                    className="w-full outline-none p-2"
                    type="text"
                    id="name"
                    name="name"
                    
                />
            </div>
            <div className="form-field my-4">
                <label htmlFor="email">Email<span className='text-red-600'>*</span></label>
                <input
                    className="w-full outline-none p-2"
                    type="email"
                    id="email"
                    name="email"
                />
            </div>
            <div className="form-field my-4">
                <label htmlFor="phone">Téléphone<span className='text-red-600'>*</span></label>
                <input
                    className="w-full outline-none p-2"
                    type="tel"
                    id="phone"
                    name="phone"
                />
            </div>
            <div className="form-field my-4">
                <label htmlFor="message">Message<span className='text-red-600'>*</span></label>
                <textarea
                    className="w-full min-h-52 outline-none p-2"
                    name="message"
                    id="message"
                    
                ></textarea>
            </div>
            <p className='my-2 italic '><span className='text-red-600'>*</span> Tous les champs sont requis.</p>
            <div className="optin my-4 flex items-baseline">
                <input type="checkbox" name="consent" id="consent" />
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