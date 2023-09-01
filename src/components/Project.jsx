export default function ProjectCard(props) {
  return (
    <div className='text-black bg-white w-1/4 flex flex-col text-center gap-3 p-5 justify-between'>
      <img src={props.src}/>
      <span className='uppercase font-bold text-xl'>{props.title}</span>
      <p className='project-desc'>{props.description}</p>
      <span className="italic">{props.stack}</span>
      <div className='flex justify-evenly font-bold'>
        <a href={props.repo} className="hover:bg-black hover:text-white">GitHub</a>
        <a href={props.live} className="hover:bg-black hover:text-white">Live</a>
      </div>
    </div>
  );
}