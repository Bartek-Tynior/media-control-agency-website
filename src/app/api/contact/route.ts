import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import FormMail from "../../../../emails/formMail";

export async function POST(req: Request) {
  const body = await req.json();

  try {

    await sendEmail({
      to: process.env.SMTP_TO_EMAIL || "",
      subject: "Welcome to NextAPI",
      sender: body.email,
      html: render(FormMail(body)),
    });

    return new Response("Email Succesfully Sent!", { status: 200 });
  } catch (error) {

    return new Response("Something went wrong!", { status: 500 });
  }
}
