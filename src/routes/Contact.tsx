import { useState } from 'react';
import ProfileLayout from '../components/ProfileLayout/ProfileLayout';
import ContactBox from '../components/ContactBox/ContactBox';
import { InfoBox } from '../components/InfoBox/InfoBox';
import { profile } from '../data/data';
import { FormInput, FormTextarea, FormButton, FormMessage } from '../components/Form';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const formspreeEndpoint = 'https://formspree.io/f/brandonlublin26@gmail.com';

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <ProfileLayout>
      <div className={styles.layout}>
        <InfoBox title={`Send ${profile.name} a Message`}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <FormInput id='name' name='name' label='Name' type='text' value={formData.name} onChange={handleChange} required />
            <FormInput id='email' name='email' label='Email' type='email' value={formData.email} onChange={handleChange} required />
            <FormInput id='subject' name='subject' label='Subject' type='text' value={formData.subject} onChange={handleChange} required />
            <FormTextarea id='message' name='message' label='Message' value={formData.message} onChange={handleChange} rows={6} required />
            <FormButton
              type='submit'
              loading={status === 'sending'}
              success={status === 'success'}
              disabled={status === 'sending'}
            >
              Send Message
            </FormButton>
            <FormMessage
              type='success'
              message="Thanks for reaching out! I'll get back to you soon."
              show={status === 'success'}
            />
            <FormMessage
              type='error'
              message='Something went wrong. Please try again or reach out via LinkedIn.'
              show={status === 'error'}
            />
          </form>
        </InfoBox>
        <ContactBox />
      </div>
    </ProfileLayout>
  );
};

export default Contact;
