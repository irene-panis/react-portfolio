export default function ProjectCard(props) {
  return (
    <div className='text-black bg-white w-1/4'>
      <img src={props.src}/>
      <span className='project-title'>{props.title}</span>
      <p className='project-desc'>{props.description}</p>
      <span>{props.stack}</span>
      <div className='project-links'>
        <a href={props.repo}>GitHub</a>
        <a href={props.live}>Live</a>
      </div>
    </div>
  );
}