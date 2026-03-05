import { openDb } from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const password = req.headers['x-admin-password'];

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const db = await openDb();
    const contacts = await db.all('SELECT * FROM contacts ORDER BY created_at DESC');
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Admin API Error:', error);
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
}
