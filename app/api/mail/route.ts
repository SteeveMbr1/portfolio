import { sendMail } from "@/lib/sendMail";

export async function POST(request: Request) {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const message = formData.get('message') as string;

    if ( email === "" )
        return Response.error().json()

    const mail = {
        to: email,
        subject: "Demande de contact",
        text: "",
        html: ''
    };

    mail.html =
    `<table>
        <tbody>
            <tr>
                <td>
                    <p>Bonjour,</p></br>
                    <p>
                        Le message suivant nous est bien parvenu.</br>
                        Merci d'avoir pris contact. Je vous répondrais sous peu.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    <table>
        <thead>
            <tr>
                <th rowspan="2">Demande de contact</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Nom: </td>
            <td>${name}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>${email}</td>
        </tr>
        <tr>
            <td>Téléphone:</td>
            <td>${phone}</td>
        </tr>
        <tr>
            <td>Message:</td>
            <td>${message.replaceAll(/[\n\r]+/g, '<br/>\n\r')}</td>
        </tr>
        </tbody>
    </table>`;

    try {
        await sendMail(mail);
        await sendMail({...mail, to: process.env.SITE_MAIL_SENDER});
        return Response.json({
            message : "Votre mail à bien été envoyé",
            success : true,
            mail: mail
        });
    } catch (error) {
        return Response.json({
            message : "Une erreur est survenu lors de l'envoie de votre mail",
            success : false,
        });
    }
  }