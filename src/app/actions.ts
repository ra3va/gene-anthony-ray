'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addSignature(formData: FormData) {
  const fullName = formData.get('fullName')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const address = formData.get('address')?.toString() || '';
  const zipCode = formData.get('zipCode')?.toString() || '';
  const phone = formData.get('phone')?.toString() || '';
  const connection = formData.get('connection')?.toString() || '';

  if (!fullName || !email || !zipCode) {
    return { success: false, error: 'Required fields are missing' };
  }

  try {
    const insert = db.prepare(`
      INSERT INTO signatures (fullName, email, address, zipCode, phone, connection)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    
    insert.run(fullName, email, address, zipCode, phone, connection);
    
    // Revalidate the home page so the new signature count/list appears
    revalidatePath('/');
    
    return { success: true };
  } catch (error) {
    console.error('Failed to add signature:', error);
    return { success: false, error: 'Failed to save signature. Please try again.' };
  }
}

export type PublicSignature = {
  id: number;
  displayName: string;
  connection: string;
  createdAt: string;
};

export async function getSignatures(limit = 10): Promise<{ count: number; recent: PublicSignature[] }> {
  try {
    // Get total count
    const countRow = db.prepare('SELECT COUNT(*) as count FROM signatures').get() as { count: number };
    const count = countRow.count;

    // Get recent signatures
    // Only return data safe for public display (First name + Last Initial, connection)
    const recentRows = db.prepare(`
      SELECT id, fullName, connection, createdAt 
      FROM signatures 
      ORDER BY createdAt DESC 
      LIMIT ?
    `).all(limit) as any[];

    const recent = recentRows.map(row => {
      // Format: "John Doe" -> "John D."
      const nameParts = row.fullName.trim().split(' ');
      let displayName = nameParts[0];
      if (nameParts.length > 1) {
        const lastInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
        displayName = `${displayName} ${lastInitial}.`;
      }

      return {
        id: row.id,
        displayName,
        connection: row.connection || 'Supporter',
        createdAt: row.createdAt
      };
    });

    return { count, recent };
  } catch (error) {
    console.error('Failed to fetch signatures:', error);
    return { count: 0, recent: [] };
  }
}
