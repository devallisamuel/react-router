import { Link } from "react-router-dom";
const Error = () => {
    return (
        <div>

            <div>This is the  Error page</div>
            <button>
                <Link to = '/'>
                    Back to Home
                </Link>
            </button>
        </div>
    );
}
export default Error;