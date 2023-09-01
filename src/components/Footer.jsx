import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer>
      <div className="socials-icons flex justify-center gap-6">
        <SocialIcon url="https://github.com/irene-panis"/>
        <SocialIcon url="https://www.linkedin.com/in/irene-panis/"/>
        <SocialIcon url="https://discordapp.com/users/354433105807015957"/>
      </div>
    </footer>
  )
}

export default Footer;