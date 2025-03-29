import { motion } from 'framer-motion';
import { FaLinkedin, FaFileDownload, FaCode, FaPalette } from 'react-icons/fa';
import { SiVercel } from 'react-icons/si';
import { Helmet } from 'react-helmet';
import cv from '../../assets/Nada Sobeh.pdf';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 10
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatDelay: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Nada Sobeh | Front End Developer</title>
        <meta name="description" content="Portfolio of Nada Sobeh, a skilled Front End Developer specializing in React and Tailwind CSS." />
      </Helmet>
      
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary-100 opacity-10 blur-xl"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-secondary-100 opacity-10 blur-xl"
          variants={floatingVariants}
          animate="floatDelay"
        />
        
        <motion.div 
          className="container mx-auto text-center relative z-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={item}
            className="mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center shadow-inner">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-300 to-primary-400 flex items-center justify-center text-white text-3xl font-bold shadow-inner">
                  NS
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Nada Sobeh
          </motion.h1>

          <motion.div 
            variants={item}
            className="flex justify-center items-center gap-3 mb-6"
          >
            <FaCode className="text-primary-500 text-xl" />
            <h2 className="text-xl sm:text-2xl text-dark-800 font-medium">
              Front End Developer
            </h2>
            <FaPalette className="text-secondary-500 text-xl" />
          </motion.div>

          <motion.p 
            variants={item} 
            className="max-w-2xl mx-auto text-lg text-dark-600 mb-8 leading-relaxed font-medium"
          >
            I specialize in building <span className="text-primary-500 font-semibold">responsive</span>, <span className="text-primary-500 font-semibold">interactive</span> web applications using modern technologies like <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind CSS</span>.
          </motion.p>

          <motion.div 
            variants={item} 
            className="flex justify-center gap-6 mb-12"
          >
            <motion.a
              href="https://vercel.com/nada22s-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label="Vercel"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiVercel className="text-2xl text-primary-500" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nada-sobeh-b094a81bb"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
              aria-label="LinkedIn"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-2xl text-primary-500" />
            </motion.a>
          </motion.div>

          <motion.div 
            variants={item} 
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Contact Me</span>
            </motion.a>
            <motion.a
              href={cv}
              download
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-medium rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload /> <span>Download CV</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-20 left-10 w-16 h-16 rounded-full bg-primary-100 opacity-20"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-secondary-500 opacity-10"
          variants={floatingVariants}
          animate="floatDelay"
        />
      </section>
    </>
  );
};

export default Hero;