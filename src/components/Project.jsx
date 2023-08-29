export default function ProjectCard(props) {
  return (
    <div className='project-card'>
      <img src={props.src}/>
      <span className='project-title'>{props.title}</span>
      <p className='project-desc'>{props.description}</p>
      <div className='project-links'>
        <a href={props.repo}>GitHub</a>
        <a href={props.live}>Live</a>
      </div>
    </div>
  );
}