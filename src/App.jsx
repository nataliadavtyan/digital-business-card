import Header from "./components/Header"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Header />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}