const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Define transporter BEFORE using it in the route
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email connection BEFORE handling requests
transporter.verify((error, success) => {
  if (error) {
    console.error(" Nodemailer Authentication Failed:", error);
  } else {
    console.log(" Nodemailer is ready to send emails.");
  }
});

// Contact form endpoint (using the correct transporter)
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    let mailOptions = {
        from: process.env.EMAIL_USER,  // Use your own email here
        to: process.env.RECEIVER_EMAIL,
        subject: `New Message: ${subject}`,
        text: `From: ${email}\n\nName: ${name}\n\nMessage:\n${message}`
    };
    
    try {
        await transporter.sendMail(mailOptions); // Ensure transporter is available
        res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Error sending email" });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
