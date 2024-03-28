import {FaSquareInstagram} from "react-icons/fa6"
import {FaLinkedin} from "react-icons/fa6"
import {FaSquareGithub} from "react-icons/fa6"

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.instagram.com/nataliadi/"><FaSquareInstagram /></a>
            <a href="https://www.linkedin.com/in/nataliadavtyan/"><FaLinkedin /></a>
            <a href="https://github.com/nataliadavtyan"><FaSquareGithub /></a>
        </footer>
    )
}