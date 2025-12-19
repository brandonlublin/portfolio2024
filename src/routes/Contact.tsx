import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header/Header';
import { profiles } from '../data/data';
import { FormInput, FormTextarea, FormButton, FormMessage } from '../components/Form';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import styles from './Contact.module.css';
import '../index.css';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, defaultTransition } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    return () => {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };
  }, []);

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
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.contactContainer}>
        <motion.div
          className={styles.contactContent}
          {...fadeInUp}
          transition={defaultTransition}
        >
          <motion.h1
            className={styles.title}
            {...fadeInDown}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            Get In Touch
          </motion.h1>

          <div className={styles.contentWrapper}>
            <motion.div
              className={styles.formSection}
              {...fadeInLeft}
              transition={{ ...defaultTransition, delay: 0.15 }}
            >
              <h2 className={styles.sectionTitle}>Send a Message</h2>
              <form onSubmit={handleSubmit} className={styles.form}>
                <FormInput
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <FormInput
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <FormInput
                  id="subject"
                  name="subject"
                  label="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <FormTextarea
                  id="message"
                  name="message"
                  label="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />

                <FormButton
                  type="submit"
                  loading={status === 'sending'}
                  success={status === 'success'}
                  disabled={status === 'sending'}
                >
                  Send Message
                </FormButton>

                <FormMessage
                  type="success"
                  message="Thanks for reaching out! I'll get back to you soon."
                  show={status === 'success'}
                />

                <FormMessage
                  type="error"
                  message="Something went wrong. Please try again or reach out via email."
                  show={status === 'error'}
                />
              </form>
            </motion.div>

            <motion.div
              className={styles.linksSection}
              {...fadeInRight}
              transition={{ ...defaultTransition, delay: 0.2 }}
            >
              <h2 className={styles.sectionTitle}>Connect With Me</h2>
              <SocialLinks profiles={profiles} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

