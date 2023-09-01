/* eslint-disable react/no-unescaped-entities */
export default function AboutMe() {
  return (
    <section className='about flex flex-col justify-center align-center text-center mx-96 min-h-full'>
      <h2 className="font-alata text-7xl">Hi, I'm Irene.</h2>
      <h3 className="font-montserrat text-2xl">
          Full-Stack Developer. Software Engineer. Gamer.
      </h3>
      <div className='about-content mt-4'>
        <p className='font-montserrat text-lg'>
          Recent boot camp graduate specializing in web development. Experienced in building and delivering full-stack MERN applications. When I'm not building cool things, you can find me watching a Twitch stream, working out, or playing video games.
        </p>
      </div>
    </section>
  );
}