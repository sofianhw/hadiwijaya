export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    // In a production environment, you would integrate an email service here.
    // Examples: Resend, SendGrid, Mailgun, or Nodemailer.
    // For now, we simulate a successful submission so your frontend works perfectly.
    
    console.log('--- New Contact Form Submission ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('-----------------------------------');

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Respond with success
    res.status(200).json({ success: true, message: 'Message received successfully.' });
  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
}
