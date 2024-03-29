import ProfilePic from "../assets/profile-pic.jpg"
import styled from "styled-components"
import { Text } from "./Text.styled"

const StyledHeader = styled.header`
    text-align: center;
`

const Portrait = styled.img`
    width: 100%;
    height: 320px;
    object-fit: cover;
    margin-bottom: 16px;
    border-radius: 10px 10px 0 0;
`
const MyName = styled.h1`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 6px;
`

const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    padding: 8px 42px;
    margin: 0 auto;
    background: #FFFFFF;
    color: #1A1B21;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    margin-bottom: 480px;

    &:hover {
        background-color: #F3BF99;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <Portrait src={ProfilePic} alt="Natalia Davtyan portrait" />
            <MyName>Natalia Davtyan</MyName>
            <Text $accent>Frontend developer</Text>
            <Text $margin>nataliadavtyan.com</Text>
            <Button as="a" href="mailto:natalia.davtyan@gmail.com">Email</Button>
        </StyledHeader>
    )
}