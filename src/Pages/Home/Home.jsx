import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/ProjectsPage'; 
import Contact from '../../Components/Contact/Contact';
import { animateScroll as scroll } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Nada Sobeh</title>
        <meta name="description" content="Welcome to the portfolio of Nada Sobeh, a Front End Developer with expertise in React and Tailwind CSS." />
      </Helmet>
      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;