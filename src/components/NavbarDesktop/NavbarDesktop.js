import { navbar_data } from "../../Utils/Utils";
import "./NavbarDesktop.css";
import { Link } from "react-router-dom";

export default function NavbarDesktop() {
  return (
    <div className="NavbarDesktop">
      <aside className="logo">
        <h2>  </h2>
      </aside>

      <aside className="links">
        <ol>
          {navbar_data.map((link, index) => {
            return (
              <Link to={link.url} key={index}>
                <li>
                  <span className="orange-color">#</span>
                  {link.title}
                </li>
              </Link>
            );
          })}
        </ol>
      </aside>
    </div>
  );
}
