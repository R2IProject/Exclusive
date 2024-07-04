import clientPromise from '../../lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const usersCollection = db.collection('userses');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };

    const result = await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'User created', userId: result.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
