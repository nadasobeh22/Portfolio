import photo1 from '../assets/images/photo1.png'
import photo2 from '../assets/images/photo2.jpeg'
import photo3 from '../assets/images/photo3.png'
import photo4 from '../assets/images/photo4.png'
import photo5 from '../assets/images/photo5.png'
import photo6 from '../assets/images/photo6.png'
import photo7 from '../assets/images/photo7.png'
import photo8 from '../assets/images/photo8.png'
import photo9 from '../assets/images/photo9.png'
import photo10 from '../assets/images/photo10.png'
import photo11 from '../assets/images/photo11.png'
import photo12 from '../assets/images/photo12.png'
import photo13 from '../assets/images/photo13.jpg'
import photo14 from '../assets/images/photo14.jpg'
import photo15 from '../assets/images/photo15.jpg'
import photo16 from '../assets/images/photo16.jpg'

export const projects = [
    {
      id: 1,
      type: 'react',
      title: 'Food Recipes App',
      shortDescription: 'Multi-themed recipe platform',
      longDescription:
        'An interactive recipe platform built from scratch using modern React practices. It offers a seamless user experience with multi-theme support (light/dark), advanced recipe search, and efficient content management, featuring a responsive design tailored for all devices.',
      live: 'https://react-project-food-h9ly.vercel.app/',
      images: [
       photo1,
       photo2],
      features: [
        'Multi-theme support (light/dark)',
        'Advanced recipe search and filtering',
        'Recipe details with cooking instructions',
        'Mobile-first responsive design',
        'Modern and user-friendly interface'
      ],
      challenges: [
        'Theme switching without page reload',
        'Developing efficient search algorithms',
        'Managing complex state seamlessly'
      ],
      category: 'Web Application'
    },
    {
      id: 2,
      type: 'react',
      title: 'Flight Booking System',
      shortDescription: 'Flight search and booking platform',
      longDescription:
        'A sophisticated flight booking system providing real-time flight availability and an intuitive passenger data entry form. Built with cutting-edge technologies, it ensures high performance and responsiveness across all devices for a smooth booking experience.',
      live: 'https://flights-neon.vercel.app/',
      images: [
        photo3,
        photo4
      ],
      features: [
        'Real-time flight search',
        'Booking management system',
        'User authentication',
        'Fully responsive design',
        'Optimized performance'
      ],
      challenges: [
        'Handling API rate limits',
        'Optimizing mobile performance',
        'Managing complex forms'
      ],
      category: 'Web Application'
    },
    {
      id: 3,
      type: 'react',
      title: 'Admin Dashboard',
      shortDescription: 'Modern administrative control panel',
      longDescription:
        'A modern and comprehensive admin dashboard developed with the latest web technologies. Fully responsive across all screen sizes, it includes order tracking, customer and staff management, and data analysis through interactive charts for a complete performance overview.',
      live: 'https://dashboard-indol-theta-75.vercel.app/',
      images: [
        photo5,
        photo6
      ],
      features: [
        'Real-time order tracking',
        'Customer and staff management',
        'Interactive data visualization charts',
        'Responsive across all screens',
        'Intuitive modern interface'
      ],
      challenges: [
        'Integrating interactive charts',
        'Optimizing performance with large datasets',
        'Ensuring responsiveness on small screens'
      ],
      category: 'Web Application'
    },
    {
      id: 4,
      type: 'react',
      title: 'XBeat Audio Store',
      shortDescription: 'eCommerce web application',
      longDescription:
        'A sleek eCommerce platform for audio products (XBeat | Audio Store), crafted with React for a smooth and fast shopping experience. It features an elegant product showcase, an interactive cart, and a secure checkout system, prioritizing user experience and performance.',
      live: 'https://store-flame-nu.vercel.app/',
      images: [
        photo7,
        photo8
      ],
      features: [
        'Stylish product showcase',
        'Interactive shopping cart',
        'Secure and fast checkout',
        'Responsive design for all devices',
        'Enhanced performance for shopping'
      ],
      challenges: [
        'Efficient cart state management',
        'Integrating a secure payment gateway',
        'Optimizing load speed'
      ],
      category: 'eCommerce'
    },
    {
      id: 5,
      type: 'js',
      title: 'Sweet Cake Bakery',
      shortDescription: 'Bakery e-commerce website',
      longDescription:
        'An elegant bakery eCommerce site offering a delightful shopping experience with an interactive product gallery. Built with core web technologies for fast performance and full responsiveness, it features a design that reflects the quality of the showcased products.',
      live: 'https://nadasobeh22.github.io/sweet-cake/',
      images: [
        photo9,
        photo10
      ],
      features: [
        'Interactive product gallery',
        'Simple and effective cart',
        'Smooth CSS animations',
        'Fully responsive layout',
        'Elegant user interface'
      ],
      challenges: [
        'Creating seamless CSS effects',
        'Building a responsive gallery',
        'Structuring maintainable styles'
      ],
      category: 'Website'
    },
    {
      id: 6,
      type: 'js',
      title: 'Food Website',
      shortDescription: 'Interactive food showcase',
      longDescription:
        'A visually stunning food showcase website built with a modern and engaging approach. Developed using traditional web technologies, it focuses on delivering an enjoyable user experience with a responsive design that adapts perfectly to all devices.',
      live: 'https://nadasobeh22.github.io/food/',
      images: [
       photo11,
        photo12
      ],
      features: [
        'Visually appealing product display',
        'Responsive across all screens',
        'Simple and effective interactivity',
        'Fast and lightweight performance',
        'User-friendly interface'
      ],
      challenges: [
        'Enhancing responsiveness for small screens',
        'Ensuring fast load times',
        'Maintaining a cohesive visual design'
      ],
      category: 'Website'
    },
    {
  id: 7,
  type: 'fullstack',
  title: 'Restaurant User Interface',
  shortDescription: 'Customer-facing food ordering experience',
  longDescription:
    'A responsive and engaging food ordering application for users with features like authentication, cart management, order placement, reservation system, and rating system. Designed to offer a smooth and intuitive experience on all devices.',
  live: 'https://drive.google.com/file/d/1Btrwgghx2YqiQf5bbODshEwXUmugzJOE/view', 
  images: [photo16,
    photo15
  ],
  features: [
    'User-friendly and responsive UI',
    'Email/Password and Google OAuth login',
    'Shopping cart management',
    'Apply discount codes',
    'Track orders and reservation status',
    'Rate menu items'
  ],
  challenges: [
    'Handling Google OAuth integration',
    'Building dynamic discount application logic',
    'Ensuring mobile-first design compatibility'
  ],
  category: 'Web Application',
  backend: 'Laravel + MySQL',
  role: 'User'
},
{
  id: 8,
  type: 'fullstack',
  title: 'Restaurant Dashboard',
  shortDescription: 'Administrative control panel for restaurant management',
  longDescription:
    'An admin dashboard designed to manage the restaurant’s operations including food menu, categories, orders, discount codes, and table reservations. Features a secure login system and role-based access control.',
  live: 'https://drive.google.com/file/d/1KRKlEBYl7nycP2L7ABLVq3XHSo1OlGlF/view?usp=sharing', 
  images: [
     photo13,
        photo14
  ],
  features: [
    'Food item management (add, edit, delete)',
    'Category management',
    'Track and change order status',
    'Manage table reservations',
    'Manage discount codes and promotions',
    'Secure role-based admin access'
  ],
  challenges: [
    'Implementing secure admin authentication',
    'Building scalable management interfaces',
    'Real-time order and reservation updates'
  ],
  category: 'Admin Panel',
  backend: 'Laravel + MySQL',
  role: 'Admin'
}

  ];