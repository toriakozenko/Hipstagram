import { Link } from "react-router-dom";
import './style.scss';

function Error() {
  return (
    <div className="error-page-container">
      <h2>Sorry, the page isn't available.</h2>
      <p>The link you followed may be broken, or the page may be removed.</p>
      <Link to={'/'}>Go back to Instagram</Link>
    </div>
  )
}

export default Error;