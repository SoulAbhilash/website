import { InputGroup, FormControl } from "react-bootstrap";
import { Container, Row, Col, Pagination, Card,Button } from 'react-bootstrap';

export const Podcast = () => {
  return (
    <div>
      <Container>
        <Row >
          <Col>
            <h2 style={{ color: "#1D617A" }}>Podcast</h2>
          </Col>

          <Col xs lg="4">
            <InputGroup className="mb-3 search_bar_div">
              <InputGroup.Text id="search-icon"><i class="fa-solid fa-magnifying-glass"/></InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Search"
                style={{ maxWidth: "350px" }}>
                </FormControl>
            </InputGroup>
          </Col>


        </Row>
      </Container>



      <div>
        <img className="pod_img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/800px-Shaqi_jrvej.jpg" alt="Podcast" />
        <div className="pod_txts">
          <div className="pod_title">Podcast Title</div>
          <div className="pod_des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt mollitia sequi eos tenetur totam ipsa expedita minima, quis iure corrupti consequuntur facilis quidem? Inventore?</div>
          <Button variant="primary">Register</Button>
        </div>
      </div>
    </div>
  );
};
