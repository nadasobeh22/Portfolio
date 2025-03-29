import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaPaperPlane, FaLinkedin, FaTimes, FaCheck } from 'react-icons/fa';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import { SiVercel } from 'react-icons/si';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mrbpaaye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Contact | Nada Sobeh</title>
        <meta name="description" content="Get in touch with Nada Sobeh for collaborations or inquiries." />
      </Helmet>

      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-secondary-900/20"></div>

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-xl text-neutral-300">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-neutral-300 mb-6">Feel free to reach out through any of these channels:</p>

                <div className="space-y-4">
                  <a href="mailto:sobehnada32@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-primary-400 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center">
                      <FiMail className="text-xl" />
                    </div>
                    <span>sobehnada32@gmail.com</span>
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://vercel.com/nada22s-projects"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center text-neutral-300 hover:text-primary-400 transition-colors"
                      aria-label="Vercel"
                    >
                      <SiVercel className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nada-sobeh-b094a81bb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-dark-800 flex items-center justify-center text-neutral-300 hover:text-primary-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-dark-800/50 rounded-xl border border-dark-700 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white mb-3">Current Availability</h4>
                <p className="text-neutral-300 mb-4">I'm currently available for:</p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span>
                    <span className="text-neutral-300">Freelance projects</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span>
                    <span className="text-neutral-300">Full-time positions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span>
                    <span className="text-neutral-300">Collaborations</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl border border-dark-700 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <motion.div custom={0} initial="hidden" animate="visible" variants={inputVariants}>
                  <label htmlFor="name" className="block text-neutral-300 mb-2">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-neutral-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition text-white placeholder-neutral-500"
                      placeholder="Enter your name"
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </motion.div>

                <motion.div custom={1} initial="hidden" animate="visible" variants={inputVariants}>
                  <label htmlFor="email" className="block text-neutral-300 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-neutral-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition text-white placeholder-neutral-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </motion.div>

                <motion.div custom={2} initial="hidden" animate="visible" variants={inputVariants}>
                  <label htmlFor="message" className="block text-neutral-300 mb-2">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="text-neutral-500" />
                    </div>
                    <textarea
                      id="message"
                      rows="5"
                      {...register('message', { required: 'Message is required' })}
                      className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none transition text-black placeholder-neutral-500 text-lg font-medium"
                      placeholder="Enter your message"
                      style={{ lineHeight: '1.5', resize: 'vertical' }}
                    />
                  </div>
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </motion.div>

                <motion.div custom={3} initial="hidden" animate="visible" variants={inputVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                      isSubmitting ? 'bg-primary-600' : 'bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </div>

              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === 'success' ? 'bg-green-900/50 border border-green-800' : 'bg-red-900/50 border border-red-800'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <>
                        <FaCheck className="text-green-400" />
                        <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <FaTimes className="text-red-400" />
                        <span className="text-red-300">Failed to send message. Please try again later.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;