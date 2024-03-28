import ProfilePic from "../assets/profile-pic.jpg"

export default function Header() {
    return (
        <div className="header">
            <img className="portrait" src={ProfilePic} alt="Natalia Davtyan portrait" />
            <h1>Natalia Davtyan</h1>
            <p className="job-title">Frontend developer</p>
            <p className="email">nataliadavtyan.com</p>
            <a href="mailto:natalia.davtyan@gmail.com" className="email-btn">Email</a>
        </div>
    )
}