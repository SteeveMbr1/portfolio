import { sendMail } from "@/lib/sendMail";

export async function POST(request: Request) {
    const formData = await request.formData();
    const email = formData.get('email')?.toString()

    if ( !email )
        return Response.error().json()

    const mail = {
        to: email,
        subject: "Demande de contact",
        text: "Raw Mail",
        html: ''
    }
    let body = '';

    for (const [k, v] of formData) {
        body +=
        `<tr>
            <td>${k}</td>
            <td>${v}</td>
        </tr>`
    }
    mail.html =
    `<table>
        <thead>
            <tr>
                <th rowspan="2">Demande de contact</th>
            </tr>
        </thead>
        <tbody>
            ${body}
        </tbody>
    </table>`
    const info = await sendMail(mail)
    return Response.json({mail, info})
  }