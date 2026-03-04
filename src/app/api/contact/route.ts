import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const formData = await req.formData();

    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const subject = formData.get('subject')?.toString();
    const message = formData.get('message')?.toString();
    const company = formData.get('company')?.toString();

    if (company) {
        return new Response(JSON.stringify({ error: 'Spam detected' }), { status: 400 });
    }

    if (!email || !message || !name || !subject) {
        return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Webpage <hello@resend.dev>',
            to: 'trevor.ramtahal@gmail.com',
            replyTo: email,
            subject: subject,
            text: `
        From: ${name}
        Email: ${email}

        Message:
        ${message}
        `,
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
