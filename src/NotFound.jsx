import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry</h2>
            <p>The Page cannot be found</p>
            <Link to = '/'>Back to Home page..</Link>
        </div>
    );
}
 
export default NotFound;