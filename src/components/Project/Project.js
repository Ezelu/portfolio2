import Button from '../Button/Button';
import './Project.css';

export default function Project({ data }) {
  const { title, image, stack, gitUrl, liveUrl, desc } = data;
  return (
    <div className='Project grey-border'>
      <aside className='image-container'>
        <img src={image} alt='project cover'/>
      </aside>
      <aside className='stack'> {stack.join(" ")} </aside>
      <aside className='content'>
        <h3 className='title'> {title} </h3>
        <p className='desc'> {desc} </p>

        <aside className='link-buttons'>
          {
            liveUrl &&
            <Button url={liveUrl} variant="orange"> Live ⚡️ </Button>
          }
          {
            gitUrl &&
            <Button url={gitUrl} variant="grey"> Code 🚀 </Button>
          }
        </aside>
      </aside>
    </div>
  )
}
