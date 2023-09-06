import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('../home');
    };

    return(
        <>
            <h3>Ini About</h3>

            <button onClick={handleClick}>Klik meh to Home</button>
        </>
    )
}

export default About;