import { Container } from "react-bootstrap";
import './style.css';
import { RelatedIntership } from "./RelatedIntership";
export const EachIntership = (props) => {

  const intershipData = {
    title: 'Sample Intership',
    intershipSource: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    date: '01/09/2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna ac placerat vestibulum lectus mauris ultrices. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Sit amet consectetur adipiscing elit ut aliquam purus. Tristique risus nec feugiat in fermentum posuere urna. Quis varius quam quisque id. Justo nec ultrices dui sapien. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Penatibus et magnis dis parturient montes nascetur ridiculus mus mauris. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tortor aliquam nulla facilisi cras fermentum odio. Montes nascetur ridiculus mus mauris vitae ultricies leo. Viverra aliquet eget sit amet tellus cras adipiscing. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.',
  };


  return (
    <Container>
          <h2 className='logo_color'>{intershipData.title}</h2>
          <intership controls className="w-100 intership" src={intershipData.intershipSource} type="intership/mp4"/>
          <div>{intershipData.date}</div>
          <h3 className='logo_color e_intern_des_title'>Description</h3>
          <div className='e_intern_des'>{intershipData.description}.</div> 
          <RelatedIntership/>
    </Container>
  )
}
