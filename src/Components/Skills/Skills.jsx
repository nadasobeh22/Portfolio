import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiSass } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Sass', icon: <SiSass />, color: '#CC6699' },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-dark-600">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-dark-800">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;