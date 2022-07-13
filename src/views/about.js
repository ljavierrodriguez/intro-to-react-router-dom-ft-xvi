import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

const About = () => {
    const history = useHistory();

    const location = useLocation();

    useEffect(() => {
        //history.push('/')

        console.log(location.pathname)
    }, [])
    return (
        <h1>About</h1>
    )
}

export default About;