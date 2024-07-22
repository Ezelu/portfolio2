import './Skills.css';
import { skills_data } from '../../Utils/Utils';

export default function Skills() {
  return (
    <div className='Skills'>
      <h2 className="mini-header">
        <span className="line-after">
          <span className="orange-color">#</span>skills 🛠
        </span>
      </h2>

      <div>
        {
          skills_data.map((skill, idx) => <span key={idx}> <SingleSkill data={skill} /> </span>)
        }
      </div>
    </div>
  );
}




function SingleSkill ({ data }) {
  const { title, list } = data;
  return (
    <div>
      <p className='title'> <b> {title} </b> </p>
      <p> {list.join(' ')} </p>
    </div>
  )
}
