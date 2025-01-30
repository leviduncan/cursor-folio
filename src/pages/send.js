import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Create a transporter object using your email provider's settings
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or your email provider (e.g., 'outlook', 'yahoo')
    auth: {
      user: 'levidun@gmail.com', // Replace with your email address
      pass: 'Lpr0Ti0Ti0m', // Replace with your email password (or app password)
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'darrin@darrinduncan.com', // Replace with the email address where you want to receive messages
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}