require("dotenv").config();
const nodemailer = require('nodemailer');
const fs = require('fs');

const path = require('path');
const sendEmail = async (to, subject, text) => {
    try {
        const templatePath = path.join(process.cwd(), "../public/emails/otpEmail.html");
        let emailHtml = fs.readFileSync(templatePath, "utf8");
        emailHtml = emailHtml.replace("{{otp}}",text);
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `AuthCrud Verification <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: emailHtml,
        });
        
        console.log('Email sent');
    } catch (error) {
        console.error('Error sending email', error);
    }
};

module.exports = sendEmail;
