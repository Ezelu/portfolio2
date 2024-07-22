import './Hero.css';
import me1 from '../../images/me1.png';
import Button from '../Button/Button';

export default function Hero() {
  return (
    <div className="Hero">
      <div className='content'>
        <h1> 
          Ezelu is a 
          <span className='orange-color'> front-end developer </span> 
          and <span className='orange-color'>javascript </span> freak! 👋🏾
        </h1>
        <p> He crafts responsive websites where technologies meet creativity </p>
        <Button url="/contact" variant="grey"> Contact Me!! </Button>
      </div>

      <div className='image'>
        <img src={me1} alt="ezelu joseph" />
      </div>
    </div>
  );
}
