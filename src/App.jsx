import Header from "./components/Header"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"
import styled from "styled-components"

const Container = styled.div`
  background-color: #1A1B21;
  height: 780px;
  width: 350px;
  border-radius: 10px;
  box-shadow: 0 0 40px -15px gray;
  position: relative;
`

export default function App() {
    return (
        <Container>
            <Header />
            <About />
            <Interests />
            <Footer />
        </Container>
    )
}