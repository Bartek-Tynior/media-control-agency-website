import nodemailer from "nodemailer";

export async function POST(req: Request) {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const options = {
      from: "you@example.com",
      to: "btynior@gmail.com",
      subject: "hello world",
    };

    await transporter.sendMail(options);

  return new Response('Succes', { status: 200 });
}
