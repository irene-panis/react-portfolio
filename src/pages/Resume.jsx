import Proficiency from "../components/Proficiency";

export default function Resume() {
  const cards = [
    {
      title: 'Front-end',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'React.js',
        'Handlebars.js',
        'Tailwind CSS',
        'Bulma CSS',
        'Bootstrap CSS'
      ]
    },
    {
      title: 'Back-end',
      items: [
        'Node.js',
        'Express.js',
        'SQL',
        'NoSQL',
        'Model-View-Controller (MVC)',
        'RESTful APIs',
        'Java'
      ]
    },
    {
      title: 'Misc.',
      items: [
        'Git',
        'Linux',
        'Visual Studio Code',
        'Object-oriented programming (OOP)',
        'Data structures & algorithms',
        'Agile development',
        'Test-driven development (TDD)'
      ]
    }
  ]
  return (
    <div className="resume flex flex-col w-3/4 align-center gap-4">
      <span className="text-center">Download my resume <a href="Irene Panis Developer Resume.pdf" target="_blank" className="underline hover:bg-black hover:text-white">here</a></span>
      <div className="flex gap-3 w-full justify-center">
      {cards.map((card, index) => (
        <Proficiency
          key={index}
          title={card.title}
          items={card.items}
        />
      ))}
      </div>
    </div>
  );
}