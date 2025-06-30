export const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI/UX, secure payments, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, secure payment processing with Stripe, order management, and an admin dashboard for inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    category: 'Full Stack',
    features: [
      'User authentication and authorization',
      'Product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order tracking and history',
      'Admin dashboard for inventory management',
      'Responsive design for all devices',
      'Email notifications for orders'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Managing complex state across multiple components',
      'Optimizing database queries for large product catalogs',
      'Ensuring responsive design across all screen sizes'
    ],
    solutions: [
      'Integrated Stripe API with proper error handling and security measures',
      'Used Redux Toolkit for efficient state management',
      'Implemented database indexing and pagination for better performance',
      'Applied mobile-first design approach with Tailwind CSS'
    ],
    timeline: '3 months',
    role: 'Full Stack Developer'
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
    longDescription: 'A modern task management application designed for teams and individuals. Built with React, TypeScript, and Firebase, it offers real-time collaboration, project organization, deadline tracking, and team communication features.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Socket.io', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/task-management-app',
    liveUrl: 'https://your-taskapp-demo.com',
    category: 'Frontend',
    features: [
      'Real-time task updates and collaboration',
      'Project and team management',
      'Drag-and-drop task organization',
      'Deadline tracking and notifications',
      'File attachments and comments',
      'Activity timeline and reporting',
      'Dark/light theme toggle',
      'Mobile-responsive interface'
    ],
    challenges: [
      'Implementing real-time synchronization across multiple users',
      'Managing complex drag-and-drop interactions',
      'Optimizing performance with large datasets',
      'Creating intuitive user experience for complex workflows'
    ],
    solutions: [
      'Used Firebase Firestore for real-time data synchronization',
      'Implemented React DnD library with custom hooks for smooth interactions',
      'Applied virtualization techniques for large task lists',
      'Conducted user testing and iterative design improvements'
    ],
    timeline: '2 months',
    role: 'Frontend Developer & UI/UX Designer'
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'An interactive weather dashboard with data visualization, forecasting, and location-based insights.',
    longDescription: 'A comprehensive weather analytics dashboard that provides detailed weather information, forecasts, and historical data visualization. Built with React, D3.js, and integrated with multiple weather APIs for accurate and comprehensive weather data.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Chart.js', 'OpenWeather API', 'Geolocation API', 'CSS3'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-demo.com',
    category: 'Data Visualization',
    features: [
      'Current weather conditions for any location',
      '7-day weather forecast with hourly details',
      'Interactive charts and data visualization',
      'Historical weather data analysis',
      'Location-based weather alerts',
      'Favorite locations management',
      'Weather maps and radar integration',
      'Responsive design with smooth animations'
    ],
    challenges: [
      'Integrating multiple weather APIs efficiently',
      'Creating responsive and interactive data visualizations',
      'Handling geolocation and user permissions',
      'Managing API rate limits and error handling'
    ],
    solutions: [
      'Implemented API aggregation layer with fallback mechanisms',
      'Used D3.js and Chart.js for scalable, interactive visualizations',
      'Created graceful fallbacks for geolocation with manual location input',
      'Implemented caching strategies and request optimization'
    ],
    timeline: '1.5 months',
    role: 'Frontend Developer & Data Visualization Specialist'
  }
];
