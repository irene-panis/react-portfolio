import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="mb-3">
      <div className="flex justify-center align-center gap-6">
        <SocialIcon target="_blank" rel="noreferrer" url="https://github.com/irene-panis"/>
        <SocialIcon target="_blank" rel="noreferrer" url="https://www.linkedin.com/in/irene-panis/"/>
        <SocialIcon target="_blank" rel="noreferrer" url="https://discordapp.com/users/354433105807015957"/>
      </div>
    </footer>
  )
}

export default Footer;