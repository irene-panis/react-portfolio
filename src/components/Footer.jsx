import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="mb-3 flex flex-col gap-2">
      <span className="text-center opacity-0">Contact me here!</span>
      <div className="flex justify-center align-center gap-6">
        <SocialIcon className="brightness-0 hover:brightness-200 hover:saturate-0 ease-in-out duration-300" target="_blank" rel="noreferrer" url="https://github.com/irene-panis" />
        <SocialIcon className="brightness-0 hover:brightness-200 hover:saturate-0 ease-in-out duration-300" target="_blank" rel="noreferrer" url="https://www.linkedin.com/in/irene-panis/"/>
        <SocialIcon className="brightness-0 hover:brightness-200 hover:saturate-0 ease-in-out duration-300" target="_blank" rel="noreferrer" url="https://discordapp.com/users/354433105807015957"/>
      </div>
    </footer>
  )
}

export default Footer;