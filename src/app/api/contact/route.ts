import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import FormMail from "../../../../emails/formMail";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("Received contact form submission:", body);

  try {
    console.log("Sending email...");

    console.log("Receiver:", process.env.SMTP_EMAIL);

    let htmlContent;

    try {
      htmlContent = await render(FormMail(body));
      console.log("Email template rendered successfully.", htmlContent);
    } catch (error) {
      console.error("Error rendering email template:", error.message || error);
      return new Response("Internal Server Error!", { status: 500 });
    }

    await sendEmail({
      to: process.env.SMTP_EMAIL || "",
      subject: "New Contact Form Submission!",
      html: htmlContent,
    });
  } catch (error: any) {
    console.error("Error sending email:", error.message || error);
    return new Response("Internal Server Error!", { status: 500 });
  }

  return new Response("Successfully Performed the Action!", { status: 200 });
}
