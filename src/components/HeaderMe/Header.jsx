
import "./Header.css";
import { CTA } from "./CTA"
import { HeaderSocial } from "./HeaderSocials";
import ME from "../../Assets/pooja.jpeg";

export const Header = () =>{

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Pooja Waghchaure</h1>
                <h5 className="text-light">Full-Stack Web Developer</h5>

                <CTA />

                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}