'use server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER;
const SMTP_PORT = process.env.SMTP_PORT;

const transporter = nodemailer.createTransport({
    host: SMTP_SERVER_HOST,
    port: SMTP_PORT,
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
    },
    secureConnection: false,
    tls: {
        ciphers:'SSLv3'
     },
} as SMTPTransport.Options);


export async function sendMail({
    to,
    subject,
    text,
    html,
}: {
    to?: string;
    subject: string;
    text: string;
    html?: string;
}) {
    try {
        const isVerified = await transporter.verify();
        const info = await transporter.sendMail({
            from: SITE_MAIL_SENDER,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });
        console.log('Message Sent', info.messageId);
        console.log('Mail sent to', to);
        return info;
    } catch (error) {
        console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
        return error;
    }

}