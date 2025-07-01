import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, branch, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Email body
    const emailContent = `
      📩 New Contact Form Submission:

      🔹 Name: ${name}
      🔹 Email: ${email}
      🔹 Phone: ${phone}
      🔹 Preferred Branch: ${branch || "Not specified"}
      🔹 Subject: ${subject}
      🔹 Message:
      ${message}
    `;

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"RKdemy Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form - ${name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
    });

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send message", error: error.message },
      { status: 500 }
    );
  }
}