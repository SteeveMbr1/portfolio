import { sendMail } from "@/lib/sendMail";

export async function POST(request: Request) {
    const formData = await request.formData();
    const email = formData.get('email')
    const name = formData.get('name')
    const to = `${name} <${email}>`

    console.log(formData);
    const mail = {
        to: email,
        subject: "Demande de contact",
        text: "Raw text",
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
    sendMail(mail)
    return Response.json({mail})
  }