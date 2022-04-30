import "./Portfolio.css"

import Nykaa from "../../Assets/nykaa.png";
import Minimalist from "../../Assets/Minimalist.png";
import TicTacToe from "../../Assets/Tic-Tac-Toe.jpeg";

const data = [
    {
        id : 1,
        image : Nykaa,
        techstack : "HTML | CSS | JavaScript | Bootstrap 5", 
        title : " This website is a colne of nykaa.com In which I had implemented Login & Sign-up page and checkout page .",
        github : "https://github.com/waghchaurepooja/nayaka",
        demo : "https://nykaaproject.netlify.app/"
    },
    {
        id : 2,
        image : Minimalist,
        techstack : "HTML | CSS | JavaScript | MongoDB | Express.JS | Node.JS | EJS | Bootstrap 5",
        title : " This website is a clone of beminimalist.co in wchich I had implemented Login & Sign-up authication. ",
        github : "https://github.com/waghchaurepooja/Clone-of-beminimalist",
        demo : "https://damp-cliffs-11671.herokuapp.com/"
    },
    {
        id : 3,
        image : TicTacToe,
        techstack : "HTML | CSS | JavaScript",
        title : "A game in which two players seek in alternate turns to complete a row, a column, or a diagonal with either three O's or three X's drawn in the spaces of a grid of nine squares; noughts and crosses.",
        github : "https://github.com/waghchaurepooja/Tic-Tac-Toe-App",
        demo : "https://tic-tac-toe-app-omega.vercel.app/"
    },
]

export const Portfolio = () =>{

    return (
        <section id = "portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map((element) =>{
                    return (
                        <article key={element.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={element.image} alt="" />
                            </div>
                            <h3>{element.title}</h3>
                            <h4>{element.techstack}</h4>
                            <div className="portfolio__item-cta">
                                <a target={"_blank"} href={element.github} className="btn">Github</a>
                                <a target={"_blank"} href={element.demo} className="btn btn-primary">Live Demo</a>
                            </div>
                        </article>
                    )
                })
                }
            </div>
        </section>
    )   
}