import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import FormMail from "../../../../emails/formMail";

export async function POST(req: Request) {
  const body = await req.json();

  await sendEmail({
    to: process.env.SMTP_EMAIL || "",
    subject: "Welcome to NextAPI",
    html: render(FormMail(body)),
  });

  return new Response("Email Succesfully Sent!", { status: 200 });
}
