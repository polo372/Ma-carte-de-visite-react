import icone from "./assets/Mail.png"
export default function Button(){
    return(
       <a href="mailto:plbd@laposte.net" className="link">
            <img src={icone} className="icone-mail"/>Email
        </a>
    )
}