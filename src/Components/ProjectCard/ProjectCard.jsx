import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group border border-gray-100"
      onClick={onClick}
    >
      <div className="h-60 overflow-hidden relative">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-neutral-200 mt-1">{project.shortDescription}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary-500 font-medium hover:text-primary-600 transition-colors">
            View Details
          </span>
          <div className="flex gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
                aria-label="Live Demo"
                title="View Live Demo"
              >
                <FaExternalLinkAlt className="text-neutral-700" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;