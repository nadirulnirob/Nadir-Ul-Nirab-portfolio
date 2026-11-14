import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSuccess(false);
    setError('');
  };
  const submit = (event) => {
    event.preventDefault();
    if (Object.values(form).some(value => !value.trim())) {
      setError('Please complete all fields before submitting.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSuccess(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeading eyebrow="GET IN TOUCH" title="Let's work together." description="Have a project idea, question, or opportunity? Send me a message." />
        <div className="contact-grid">
          <div className="contact-aside">
            <h3>Have something in mind?</h3><p>I’m open to learning opportunities, collaborations, and conversations about software development.</p>
            <div className="contact-detail"><span className="detail-icon"><Mail size={18} /></span><div><small>EMAIL</small><a href="mailto:hello@nadirul.dev">hello@nadirul.dev</a></div></div>
            <div className="contact-detail"><span className="detail-icon"><MapPin size={18} /></span><div><small>LOCATION</small><span>Dhaka, Bangladesh</span></div></div>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>Your name<input name="name" value={form.name} onChange={update} placeholder="John Doe" required /></label>
              <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="john@example.com" required /></label>
            </div>
            <label>Subject<input name="subject" value={form.subject} onChange={update} placeholder="How can I help?" required /></label>
            <label>Message<textarea name="message" value={form.message} onChange={update} placeholder="Write your message..." rows="5" required /></label>
            {error && <p className="form-message error">{error}</p>}
            {success && <p className="form-message success">Thanks! Your form passed validation. Connect an email service to receive messages.</p>}
            <button className="btn btn-primary submit-btn" type="submit">Send message <Send size={16} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}