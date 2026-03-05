import { openDb } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const db = await openDb();
    
    await db.run(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.status(200).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('Contact API Error:', error);
    res.status(500).json({ error: 'An error occurred while saving the message.' });
  }
}
