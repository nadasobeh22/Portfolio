import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiVercel, href: 'https://vercel.com/nada22s-projects', label: 'Vercel' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nada-sobeh-b094a81bb', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { title: 'Home', to: 'hero' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      
      {/* Floating blobs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-primary-900/5 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-secondary-900/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Nada Sobeh
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Frontend Developer specializing in React and modern web technologies.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all relative overflow-hidden group"
                    aria-label={social.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-xl text-white group-hover:text-primary-400 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:ml-auto"
          >
            <h4 className="text-lg font-semibold text-neutral-200 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                >
                  <a 
                    href={`#${link.to}`}
                    className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-neutral-200 mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <HiOutlineMail className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:sobehnada32@gmail.com" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  sobehnada32@gmail.com
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 5 }}
              >
                <HiOutlinePhone className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">+963 968446054</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-dark-800 pt-8 text-center"
        >
          <p className="text-neutral-500">
            &copy; {currentYear} Eng.Nada Sobeh. All rights reserved. 
           
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;