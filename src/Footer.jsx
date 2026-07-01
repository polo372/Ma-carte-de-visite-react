import facebook from "./assets/Facebook Icon.png"
import twitter from "./assets/Twitter Icon.png"
import instagram from "./assets/Instagram Icon.png"
import linkedin from "./assets/Linkedin Icon.png"
import github from "./assets/GitHub Icon.png"
export default function Footer(){
    return(
        <footer>
            <a href="https://x.com/plbd372" target="_blank"><img className="social twitter" src={twitter}/></a>
            <a href="https://www.facebook.com/paul.beaugrand/" target="_blank"><img className="social facebook" src={facebook}/></a>
            <a href="https://www.instagram.com/beaugrand_paul/" target="_blank"><img className="social instagram" src={instagram}/></a>
            <a href="https://www.linkedin.com/in/paul-beaugrand-b328a5323/?skipRedirect=true" target="_blank"><img className="social linkedin" src={linkedin}/></a>
            <a href="https://github.com/polo372" target="_blank"><img className="social github" src={github}/></a>
        </footer>
    )
}