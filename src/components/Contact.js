import { NavLink,   Link } from "react-router-dom";
const Contact = () => {
    let isActive = true;
    return (
        <div>
            <div>
                <Link to = '/'>
                    Home
                </Link>
            </div>
            <div>
                <Link to = '/about' >                    
                    About
                </Link>
            </div>
            <div>
                <NavLink to = '/contact' style={isActive => ({
                    color: isActive ? 'red':'green'
                })}>                    
                    Contact
                </NavLink>
            </div>
            <div>This is the contact page</div>
        </div>
    );
}
export default Contact;