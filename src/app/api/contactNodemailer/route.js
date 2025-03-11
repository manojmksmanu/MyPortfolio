import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
console.log('how are you ')
    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "manojforwork2022@gmail.com",
        pass: process.env.EMAIL_PASS || "kxvx tnam hiii ptms", // It's better to use environment variables
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || "manojforwork2022@gmail.com",
      to: process.env.EMAIL_RECIPIENT || "manoj2022019@gmail.com",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0891b2;">New Contact Form Submission (Portfolio Website) </h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
