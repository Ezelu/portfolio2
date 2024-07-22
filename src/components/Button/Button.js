import './Button.css';
import { Link } from 'react-router-dom';

export default function Button({ variant, url, children }) {
  return (
    <Link to={url}>
      <div className={`Button ${variant}-variant-button`}>
        { children }
      </div>
    </Link>
  )
}
