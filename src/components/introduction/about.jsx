import "./about.css"
import Logo from "../../img/riteshzd-logo.png"
import Me from "../../img/riteshzd-pic.png"

const About = ()=>{
    return(
        <div className="about">
            <div className="about-logo">
            <img src={Logo} alt="" className="about-image logo"/>
            </div>
            <div className="about-info">
                <div className="about-left">
                    <img src={Me} alt="" className="about-image me"/>
                </div>
                <div className="about-right">
                    <p className="about-description">
                        Hi, I am Ritesh. I am a SDE by proffesion and 
                        work majorly in the devops domain. I love web 
                        developement and building products as well. 
                        In my liesure, I love reading books, you can 
                        checkout my reading list below
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About