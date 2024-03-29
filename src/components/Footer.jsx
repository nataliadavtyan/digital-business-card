import {FaSquareInstagram} from "react-icons/fa6"
import {FaLinkedin} from "react-icons/fa6"
import {FaSquareGithub} from "react-icons/fa6"
import styled from "styled-components"

const StyledFooter = styled.footer`
    height: 64px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: #161619;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    a {
        color: #918E9B;
        font-size: 25px;

        &:hover {
            color: #e1e4e8;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <a href="https://www.instagram.com/nataliadi/"><FaSquareInstagram /></a>
            <a href="https://www.linkedin.com/in/nataliadavtyan/"><FaLinkedin /></a>
            <a href="https://github.com/nataliadavtyan"><FaSquareGithub /></a>
        </StyledFooter>
    )
}