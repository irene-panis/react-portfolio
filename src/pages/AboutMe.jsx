/* eslint-disable react/no-unescaped-entities */
export default function AboutMe() {
  return (
    <section className='about flex flex-col justify-center items-start text-center xl:mx-96 md:mx-28 mx-0 min-h-full relative'>
      <h2 className="greeting font-alata text-5xl uppercase">Here's the actual story...</h2>
      <div className='about-content mt-4 text-left'>
        <h3 className="font-montserrat text-2xl">
          This wasn't always the plan.
        </h3>
        <p className='font-montserrat text-lg'>
          My love for coding came about while I was pursuing my degree in Psychology at UC San Diego. Both a life-long gamer and a lover of puzzles, I took an immediate liking to the intro programming courses I was required to take for my degree. Not only was the challenge fun to me, but the tech-savviness and proximity to computers that coding required was something I already knew and enjoyed.
        </p>
      </div>
      <div className='about-content mt-4 text-left'>
        <h3 className="font-montserrat text-2xl">
          So I changed course.
        </h3>
        <p className='font-montserrat text-lg'>
          While I didn't get to switch majors at UCSD like I wanted, I did end up enrolling in UCSD's coding bootcamp following my graduation. The six-month immersive program gave me a taste of being a developer, teaching me the ins and outs of full-stack web development. I loved it, and I am eternally grateful for what it taught me.
        </p>
      </div>
      <div className='about-content mt-4 text-left'>
        <h3 className="font-montserrat text-2xl">
          And the rest is history.
        </h3>
        <p className='font-montserrat text-lg'>
          Now, I'm spending my free time building more cool things and trying to master technologies old and new, as well as looking for work. While I'm most comfortable with MERN, I plan to build upon this foundation and learn new frameworks and libraries to develop even bigger and better apps.
        </p>
      </div>
    </section>
  );
}