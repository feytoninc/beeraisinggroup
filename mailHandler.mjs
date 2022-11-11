import "dotenv/config";
import nodemailer, { createTransport } from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

export const sendMail = async (data) => {
  let user = null;
  if (process.env.NODE_ENV === "production") {
    user = { pass: EMAIL_PASS, user: EMAIL_USER };
  } else {
    user = await nodemailer.createTestAccount();
  }

  let transport = createTransport({});
};
export default sendMail;
