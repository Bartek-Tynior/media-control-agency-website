import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import FormMail from "../../../../emails/formMail";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    await sendEmail({
      to: process.env.SMTP_EMAIL || "",
      subject: "New Contact Form Submission!",
      html: render(FormMail(body)),
    });
  } catch (error: any) {
    return new Response("Internal Server Error!", { status: 500 });
  }

  return new Response("Succesfully Performed the Action!", { status: 200 });
}
