'use server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_SENDER = process.env.SITE_MAIL_SENDER;
const SMTP_PORT = process.env.SMTP_PORT;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SMTP_SERVER_USERNAME,
        pass: SMTP_SERVER_PASSWORD,
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
        await transporter.verify();
        const info = await transporter.sendMail({
            from: SITE_MAIL_SENDER,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });
        return info.accepted;
    } catch (error) {
        if (error instanceof Error) {
            return error.message;
        }
        return error;
    }

}