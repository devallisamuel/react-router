import { NavLink,   Link } from "react-router-dom";
const About = () => {
    let isActive = true;
    return (
        <div>
            <div>
                <Link to = '/'>
                    Home
                </Link>
            </div>
            <div>
                <NavLink to = '/about' style={isActive => ({
                    color: isActive ? 'red':'green'
                })}>                    
                    About
                </NavLink>
            </div>
            <div>
                <Link to = '/contact'>                    
                    Contact
                </Link>
            </div>
            <div>This is the about page</div>
        </div>
    );
}
export default About;