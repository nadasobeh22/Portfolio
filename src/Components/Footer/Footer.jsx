import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiVercel, href: 'https://vercel.com/nada22s-projects', label: 'Vercel' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nada-sobeh-b094a81bb', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-900/10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary-900/10 blur-xl"></div>
      
      <div className="container mx-auto relative">
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Nada Sobeh
            </h3>
            <p className="text-neutral-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Frontend Developer specializing in React and modern web technologies.
            </p>
            
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-dark-800 hover:bg-dark-700 transition-all relative overflow-hidden group"
                    aria-label={social.label}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-2xl text-white group-hover:text-primary-400 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  </motion.a>
                );
              })}
            </div>

            <motion.div 
              className="mt-8 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <HiOutlineMail className="text-primary-400 mr-3 text-xl" />
              <a href="mailto:sobehnada32@gmail.com" className="text-neutral-300 hover:text-primary-400 transition-colors text-lg">
                sobehnada32@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-dark-800 pt-8 text-center"
        >
          <p className="text-neutral-500">
            &copy; {currentYear} Nada Sobeh. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;