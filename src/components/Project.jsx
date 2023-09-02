export default function ProjectCard(props) {
  return (
    <div className='text-black bg-white w-1/4 flex flex-col text-center gap-3 p-5 justify-between rounded drop-shadow-lg'>
      <img src={props.src}/>
      <span className='uppercase font-bold text-xl'>{props.title}</span>
      <p className='project-desc'>{props.description}</p>
      <span className="italic">{props.stack}</span>
      <div className='flex justify-evenly font-bold'>
        <a href={props.repo} target="_blank" className="hover:bg-black hover:text-white" rel="noreferrer">GitHub</a>
        <a href={props.live} target="_blank" rel="noreferrer" className="hover:bg-black hover:text-white">Live</a>
      </div>
    </div>
  );
}