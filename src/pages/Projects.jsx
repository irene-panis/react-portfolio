import ProjectCard from '../components/Project';

export default function Projects() {
  const projects = [
    {
      title: 'Think Thieves',
      description: `Re-imagining of esports organization 100 Thieves' website that uses web scrapers and API calls to retrieve latest data about upcoming matches and current live streams.`,
      stack: 'React, Express.js, Node.js, Puppeteer, Redis',
      src: '/thinkthieves.jpg',
      repo: 'https://github.com/irene-panis/think-thieves',
      live: 'https://thinkthieves-c78e2959a576.herokuapp.com/'
    },
    {
      title: 'Jobhunter',
      description: 'Job application tracker that allows users to see their progress at a glance. Full-stack application.',
      stack: 'React, MongoDB, Express.js, Node.js, Tailwind CSS',
      src: '/jobhunter.png',
      repo: 'https://github.com/irene-panis/jobhunter',
      live: 'https://jobhunterapp-345c7e7b566e.herokuapp.com/'
    },
    {
      title: 'Dagobah Depot',
      description: 'A Star Wars-themed community marketplace built with two other team members. Full-stack application.',
      stack: 'Handlebars.js, MySQL, Node.js, Express.js, Stripe.js',
      src: '/dagobah.jpg',
      repo: 'https://github.com/irene-panis/dagobah-depot',
      live: 'https://dagobah-depot-34081fe1df5e.herokuapp.com/'
    },
    {
      title: 'Ensemble Blog',
      description: 'Simple blog that allows users to sign up or log in and create posts and comments. Full-stack application.',
      stack: 'Handlebars.js, MySQL, Node.js, Express.js, Bulma CSS',
      src: 'ensemble.png',
      repo: 'https://github.com/irene-panis/ensemble-blog',
      live: 'https://ensemble-blog-bfd105093377.herokuapp.com/'
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
      title: 'The Weather App',
      description: 'A weather app that displays current weather info and five-day forecast for any given city using Weather API.',
      stack: 'HTML, Bootstrap CSS, JavaScript, jQuery, RESTful APIs',
      src: 'weatherapp.jpg',
      repo: 'https://github.com/irene-panis/weather-app',
      live: 'https://irene-panis.github.io/weather-app/'
    }
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