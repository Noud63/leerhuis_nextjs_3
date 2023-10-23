import nodemailer from 'nodemailer'
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    
    const { name, email, message } = await req.json()

    const user = process.env.NEXT_GMAIL_ADDRESS;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_GMAIL_ADDRESS,
        pass: process.env.NEXT_PASSWORD
      },
    });

const mailOptions = {
  from: user,
  to: "noudvandun@gmail.com",
  subject: `Contactformulier ontvangen van ${name}`,
  text: message,
  html: `<img src="cid:maillogo"/><br/><br/>
        <b>Name:</b> ${name}<br/>
        <b>Email:</b> ${email}<br/>
        <hr>
        <p>${message}</p>`,
  attachments: [
    {
      filename: "leerhuislogo.png",
      path: `${process.cwd()}/public/icons/leerhuislogomail.png`,
      cid: "maillogo",
    },
  ],
};

const mail = await transporter.sendMail(mailOptions, (err, result) => {
  if (err) {
    console.log(err);
    return NextResponse.json({message: "Oops, unable to Send email"});
  } else {
    return NextResponse.json({message:"thank you for your email!"});
  }
});

return NextResponse.json({message: "Mail sent successfully", status: 200})

}