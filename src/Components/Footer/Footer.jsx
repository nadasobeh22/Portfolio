import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaCodepen, href: 'https://codepen.io/yourusername', label: 'CodePen' },
  ];

  const footerLinks = [
    { title: 'Quick Links', links: ['Home', 'About', 'Skills', 'Projects', 'Contact'] },
    { title: 'Resources', links: ['Blog', 'Tutorials', 'Documentation', 'GitHub Repos'] },
    { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] }
  ];

  return (
    <footer className="bg-dark-900 text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-900/10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary-900/10 blur-xl"></div>
      
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Nada Sobeh
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                    aria-label={social.label}
                    whileHover={{ y: -3 }}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-neutral-200 mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-neutral-200 mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <HiOutlineMail className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:sobehnada32@gmail.com" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  sobehnada32@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <HiOutlinePhone className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400">+963 968446054</span>
              </li>
            </ul>
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
            <span className="block sm:inline"> Crafted with <span className="text-primary-400">♥</span> in Damascus, Syria.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;