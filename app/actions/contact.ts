"use server";

import nodemailer from "nodemailer";

function safe(v: FormDataEntryValue | null) {
  return (typeof v === "string" ? v.trim() : "") || "";
}

export async function sendContactEmail(formData: FormData) {
  const name = safe(formData.get("name"));
  const email = safe(formData.get("email"));
  const company = safe(formData.get("company"));
  const phone = safe(formData.get("phone"));
  const topic = safe(formData.get("topic"));
  const message = safe(formData.get("message"));

  // Basic validation
  if (!name || !email || !topic || !message) {
    // In server actions we simply return; UI still stays on the page.
    return;
  }

  // If SMTP env vars are not set, do nothing (keeps page safe in dev)
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.CONTACT_TO_EMAIL
  ) {
    console.warn("SMTP env vars missing. Skipping email send.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false otherwise
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const subject = `Spinor Website Contact: ${topic}`;
  const text = `
New contact form submission

Name: ${name}
Email: ${email}
Company: ${company || "-"}
Phone: ${phone || "-"}

Topic: ${topic}

Message:
${message}
`;

  await transporter.sendMail({
    from: `Spinor Website <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: email,
    subject,
    text,
  });
}
