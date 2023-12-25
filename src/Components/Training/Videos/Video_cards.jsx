import React, { useEffect, useState } from 'react'
import './style.css'
import { Container, Row, Col, Pagination, Card } from 'react-bootstrap';
import Axios from "axios";
const BASE_URL = require("../../../global_vars");


export const Video_cards = () => {

    const [allVideos, setAllVideos] = useState([]);
    
    useEffect(() => {
      Axios.get(`${BASE_URL}/training/videos`).then(
        (response) => setAllVideos(response.data.body.data)
      )
    }, [])
        
        const divStyle = {
        cursor: "pointer",
        };
        const videosPerPage = 6;
        const [currentPage, setCurrentPage] = useState(1);
        
        const indexOfLastVideo = currentPage * videosPerPage;
        const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
        const currentVideos = allVideos.slice(indexOfFirstVideo, indexOfLastVideo);
        
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allVideos.length / videosPerPage); i++) {
        pageNumbers.push(i);
        }
        
        const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="video-section">
        <Container>
            <Row>
                {currentVideos.map((video, index) => (
                    <Col key={index} md={4} sm={6} className="mb-4">
                        <div style={divStyle} >
                            <Card  className="mw-25 video_card">
                                <Card.Img variant="top" src={video.thumbnail} alt="Video"/>
                                <Card.Body className='e_video_body'>
                                    <Card.Title>{video.title}</Card.Title>
                                    <Card.Subtitle><h6>{video.date}</h6></Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </div> 
                    </Col>
                ))}
            </Row>

            <div className="d-flex justify-content-center mt-4">
                <Pagination>
                    {pageNumbers.map((number) => (
                        <Pagination.Item
                            key={number}
                            onClick={() => paginate(number)}
                            active={number === currentPage}>

                            {number}
                            
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </Container>
  </div>
  )
}