import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  sender: string;
  html: string;
};

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {

  console.log("sendEmail", data);
  
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: data.sender,
    ...data,
  });
};
