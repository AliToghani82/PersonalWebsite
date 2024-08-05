import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as nodemailer from "nodemailer";

// Initialize Firebase Admin
admin.initializeApp();

// Configure your email transporter using Nodemailer
const gmailEmail = functions.config().email.user;
const gmailPassword = functions.config().email.pass;

// Configure your email transporter using Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});


// Define an interface for the contact form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Firebase function to send email
export const sendContactEmail =
    functions.https.onCall((data: ContactFormData) => {
      const {name, email, message} = data;

      const mailOptions = {
        from: "alicontactmewebsite@gmail.com",
        to: "alitoghani82@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      return transporter.sendMail(mailOptions)
        .then(() => {
          return {success: true};
        })
        .catch((error) => {
          return {success: false, error: error.message};
        });
    });
