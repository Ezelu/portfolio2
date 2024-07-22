import "./Projects.css";
import { projects_data } from "../../Utils/Utils";
import Project from "../Project/Project";

export default function Projects() {
  return (
    <div className="Projects">
      <h2 className="mini-header">
        <span className="line-after">
          <span className="orange-color">#</span>projects 💼
        </span>
      </h2>

      <div className="projects-container">
        {
          projects_data.map((project, index) => {
            return <span key={index}>
              <Project data={project} />;
            </span> 
          })
        }
      </div>
    </div>
  );
}
