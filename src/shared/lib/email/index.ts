"use server"
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass,
    },
});
export const verifyEmail = async (userEmail: string, code: string) => {
    const mailOptions: Mail.Options = {
        from: email,
        to: userEmail,
        subject: "Verification code",
        html: `<p>Use your verification code to verify your email.</p>${code}<p></p>`,
    };
    return new Promise<string>((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err) {
            if (!err) {
                resolve('Email sent');
            } else {
                reject(err.message);
            }
        });
    });
}