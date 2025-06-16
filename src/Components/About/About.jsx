import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import photo from '../../assets/images/photo.jpg'
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textItem = {
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

  const imageItem = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary-100 opacity-20 blur-xl"></div>
      <div className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-secondary-500 opacity-10 blur-xl"></div>

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          <motion.div variants={textItem} className="lg:w-2/3 space-y-8">
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-neutral-700">
                <span className="text-2xl text-primary-500 font-bold">Hello!</span> I’m Nada Sobeh,
                <span className="font-bold text-dark-800">Web Developer /Front End</span>, I bring over 3 years of experience
                creating responsive, interactive, and user-friendly web applications.
              </p>

              <p className="text-lg text-neutral-600">
                My journey in tech started with a passion for problem-solving, evolving through countless hours of
                self-learning. I’ve honed my skills in{' '}
                <span className="font-semibold text-primary-500">HTML</span>,{' '}
                <span className="font-semibold text-primary-500">CSS</span>,{' '}
                <span className="font-semibold text-primary-500">JavaScript</span>, and{' '}
                <span className="font-semibold text-primary-500">React.js</span>, alongside tools like{' '}
                <span className="font-semibold text-primary-500">Tailwind CSS</span> and{' '}
                <span className="font-semibold text-primary-500">Git</span>. I’m currently in my fifth year at the Syrian
                Virtual University, studying{' '}
                <span className="font-semibold">Software Engineering and Data Science</span>, and I hold a Bachelor’s
                degree in Accounting.
              </p>

              <div className="p-6 bg-white rounded-xl shadow-lg border border-neutral-100">
                <h3 className="text-lg font-bold text-dark-800 mb-3">Experience Highlights:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-neutral-700">
                      Freelancing since 2020, delivering 10+ projects with 95% client satisfaction
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-neutral-700">
                      Reduced development time by 30% with reusable React components
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-neutral-700">
                      Built responsive designs optimized for all devices using Tailwind CSS
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg border border-neutral-100">
                <h3 className="text-lg font-bold text-dark-800 mb-3">What Drives Me:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-neutral-700">Transforming ideas into functional web experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-neutral-700">Collaborating to bring creative visions to life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2">✓</span>
                    <span className="text-neutral-700">Staying ahead with the latest tech trends</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={imageItem} className="lg:w-1/3 relative">
            <div className="relative group">
              <img
                src= {photo}
                alt="Nada Sobeh"
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover shadow-2xl mx-auto border-4 border-white transform group-hover:-rotate-3 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary-500 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-primary-500">3+</span>
                  <span className="text-sm text-neutral-600">Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;