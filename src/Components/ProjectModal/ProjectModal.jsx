import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-white rounded-xl w-full max-w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Section */}
        <div className="relative w-full">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 bg-gray-100 overflow-hidden rounded-t-xl">
            {project.images && project.images.length > 0 ? (
              project.images.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found')}
                />
              ))
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-sm sm:text-base">
                No Image Available
              </div>
            )}
            {project.images && project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-all"
                  aria-label="Previous image"
                >
                  <FaChevronLeft className="text-gray-700 text-lg sm:text-xl" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-all"
                  aria-label="Next image"
                >
                  <FaChevronRight className="text-gray-700 text-lg sm:text-xl" />
                </button>
              </>
            )}
          </div>
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center hover:bg-white hover:text-primary-600 transition-all z-10"
            aria-label="Close modal"
          >
            <FaTimes className="text-gray-700 text-base sm:text-lg" />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            {/* Left Section: Description, Features, Challenges */}
            <div className="md:w-2/3 space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Key Features */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Key Features</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start p-2 sm:p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
                      <span className="text-primary-500 mr-2 sm:mr-3 mt-0.5 sm:mt-1">
                        <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Challenges & Solutions</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="p-2 sm:p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-all">
                      <p className="font-medium text-gray-800 text-sm sm:text-base mb-1">Challenge: {challenge}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Solution: Implemented innovative approaches to overcome this challenge effectively.</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Section: Live Demo & Project Details */}
            <div className="md:w-1/3">
              <div className="sticky top-4 sm:top-8 space-y-4 sm:space-y-6">
                {/* Live Demo Button */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg shadow-md hover:from-primary-600 hover:to-secondary-600 transition-all text-sm sm:text-base"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

                {/* Project Details */}
                <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Project Details</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-600 font-medium">Category:</span>
                      <span className="text-gray-800 font-semibold">{project.category}</span>
                    </li>
                    <li className="flex justify-between items-center text-sm sm:text-base">
                      <span className="text-gray-600 font-medium">Status:</span>
                      <span className="text-primary-500 font-semibold">Completed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;