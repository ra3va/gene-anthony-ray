'use client';

import { useState } from 'react';
import { addSignature } from '@/app/actions';

export default function PetitionForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await addSignature(formData);

    if (result.success) {
      setFormSubmitted(true);
    } else {
      setError(result.error || 'Something went wrong. Please try again.');
    }
    
    setIsPending(false);
  }

  return (
    <div className="glass-card">
      {!formSubmitted ? (
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: '#ff6b6b', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>{error}</div>}
          <div className="form-group">
            <label htmlFor="petition-name">Full Name</label>
            <input type="text" id="petition-name" name="fullName" className="form-control" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="petition-email">Email Address</label>
            <input type="email" id="petition-email" name="email" className="form-control" placeholder="Your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="petition-address">Street Address</label>
            <input type="text" id="petition-address" name="address" className="form-control" placeholder="Your street address" />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="petition-zip">Zip Code</label>
              <input type="text" id="petition-zip" name="zipCode" className="form-control" placeholder="e.g. 10039" required />
            </div>
            <div className="form-group">
              <label htmlFor="petition-phone">Phone (optional)</label>
              <input type="tel" id="petition-phone" name="phone" className="form-control" placeholder="(212) 555-0000" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="petition-connection">Your Connection (optional)</label>
            <textarea id="petition-connection" name="connection" className="form-control" rows={3} placeholder="How do you know Gene? Are you a neighbor, family member, fan, or community leader?" />
          </div>
          <div className="form-group" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isPending}>
              {isPending ? 'Adding Your Name...' : 'Add My Name to the Petition'}
            </button>
          </div>
        </form>
      ) : (
        <div className="thank-you-message">
          <div className="thank-you-icon">✦</div>
          <h3>Thank You</h3>
          <p>Your name has been added. Together, we will make <strong>Gene Anthony Ray Way</strong> a reality.</p>
        </div>
      )}
    </div>
  );
}
