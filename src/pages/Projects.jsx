import ProjectCard from '../components/Project';

export default function Projects() {
  const projects = [
    {
      title: 'Jobhunter',
      description: 'Job application tracker. Full-stack application.',
      stack: 'MongoDB, Express.js, React, Node.js, Tailwind CSS',
      src: '/jobhunter.png',
      repo: 'https://github.com/irene-panis/jobhunter',
      live: 'https://jobhunterapp-345c7e7b566e.herokuapp.com/'
    },
    {
      title: 'Dagobah Depot',
      description: 'A Star Wars-themed community marketplace built with two other team members. Full-stack application.',
      stack: 'Sequelize ORM, Node.js, Express.js, Handlebars.js, Stripe.js',
      src: '/dagobah.jpg',
      repo: 'https://github.com/irene-panis/dagobah-depot',
      live: 'https://dagobah-depot-34081fe1df5e.herokuapp.com/'
    },
    {
      title: 'Pokedex',
      description: 'A simple application for creating Pokemon teams and viewing Pokemon information. Built with three other team members.',
      stack: 'HTML, Tailwind CSS, JavaScript, jQuery, RESTful APIs',
      src: '/pokedex.jpg',
      repo: 'https://github.com/irene-panis/pokemon-index',
      live: 'https://linuscth.github.io/pokemon-index/'
    },
    {
      title: 'Ensemble Blog',
      description: 'Simple blog that allows users to sign up or log in and create posts and comments. Full-stack application.',
      stack: 'Bulma CSS, Node.js, Express.js, Sequelize ORM, Handlebars.js',
      src: 'ensemble.png',
      repo: 'https://github.com/irene-panis/ensemble-blog',
      live: 'https://ensemble-blog-bfd105093377.herokuapp.com/'
    },
    {
      title: 'The Weather App',
      description: 'A weather app that displays current weather info and five-day forecast for any given city using Weather API.',
      stack: 'HTML, Bootstrap CSS, JavaScript, jQuery, RESTful APIs',
      src: 'weatherapp.jpg',
      repo: 'https://github.com/irene-panis/weather-app',
      live: 'https://irene-panis.github.io/weather-app/'
    },
    {
      title: 'JavaScript Quiz',
      description: 'Quiz app that asks JavaScript questions and allows users to save their scores in local storage.',
      stack: 'HTML, CSS, JavaScript',
      src: 'codingquiz.jpg',
      repo: 'https://github.com/irene-panis/javascript-quiz',
      live: 'https://irene-panis.github.io/javascript-quiz/'
    },
  ];

  return (
    <div className="projects flex gap-8 flex-wrap justify-center align-center">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          stack={project.stack}
          src={project.src}
          repo={project.repo}
          live={project.live}
        />
      ))}
    </div>
  );
}