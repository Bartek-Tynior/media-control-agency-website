import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import { Email } from "../../../../emails";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "kiran@example.com",
    subject: "Welcome to NextAPI",
    html: render(Email()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}