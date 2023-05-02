
import github from "../assets/github.png"
import logo from "../assets/github.png"
import instagram from "../assets/instagram.png"
import youtube from "../assets/youtube.png"

const Footer = () => {
  return (
    <footer className="h-full footer footer-center bottom-0 p-10 bg-base-200 text-primary-content">
  <div>
    <img src={logo} alt="yes" className="h-14 w-14  "/>
    <p className="font-bold pt-2">
      Made using React and TailwindCSS with DaisyUI!<br/>Check out more of my content
    </p> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a href="https://twitter.com/dhclub1"><img src={instagram} alt="insatlogo" className='w-8 h-8 hover:-translate-y-2 duration-300'/></a> 
      <a href="https://www.youtube.com/@DHsPianoLand"><img src={youtube} alt="ytlogo" className='w-8 h-8 hover:-translate-y-2 duration-300'/></a> 
      <a href="https://github.com/theeatch"><img src={github} alt="githublog" className='w-8 h-8 hover:-translate-y-2 duration-300'/></a>
    </div>
  </div>
</footer>
    );
}


export default Footer;
