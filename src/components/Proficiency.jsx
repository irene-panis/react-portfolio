export default function Proficiency(props) {
  return (
    <div className="flex flex-col bg-white text-black md:w-1/4 w-5/6 gap-2 drop-shadow-md rounded p-3">
      <h2 className="text-xl font-bold text-center">{props.title}</h2>
      <ul className="flex flex-col gap-2 list-disc list-inside">
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}