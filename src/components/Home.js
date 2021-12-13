import { NavLink, Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Home = ({name}) => {
    let isActive = true;
    return (
        <div>
            <div>
                <NavLink to = '/' style={isActive => ({
                    color: isActive ? 'red':'green'
                })}>
                    Home
                </NavLink>
            </div>
            <div>
                <Link to = '/about'>                    
                    About
                </Link>
            </div>
            <div>
                <Link to = '/contact'>                    
                    Contact
                </Link>
            </div>
            <div>This is the  home page{name}</div>
        </div>
    );
}
Home.propTypes = {
    name :PropTypes.bool.isRequired
    //   PropTypes.node      
    //     PropTypes.bool      
    //     PropTypes.func       
    //    PropTypes.number     
    //   PropTypes.object      
    //    PropTypes.string     
    //     PropTypes.symbol     
    //   PropTypes.instanceOf 
    //    PropTypes.isRequired   
    //     PropTypes.element     
};
export default Home;