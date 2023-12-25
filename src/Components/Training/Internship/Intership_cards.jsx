import React, { useEffect, useState } from 'react'
import './style.css'
import { Container, Row, Col, Pagination, Card } from 'react-bootstrap';
import Axios from "axios";
const BASE_URL = require("../../../global_vars");


export const Intership_cards = () => {

    const [allInterships, setAllInterships] = useState([]);
    
    useEffect(() => {
      Axios.get(`${BASE_URL}/training/interships`).then(
        (response) => setAllInterships(response.data.body.data)
      )
    }, [])
        
        const divStyle = {
        cursor: "pointer",
        };
        const intershipsPerPage = 6;
        const [currentPage, setCurrentPage] = useState(1);
        
        const indexOfLastIntership = currentPage * intershipsPerPage;
        const indexOfFirstIntership = indexOfLastIntership - intershipsPerPage;
        const currentInterships = allInterships.slice(indexOfFirstIntership, indexOfLastIntership);
        
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allInterships.length / intershipsPerPage); i++) {
        pageNumbers.push(i);
        }
        
        const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="intership-section">
        <Container>
            <Row>
                {currentInterships.map((intership, index) => (
                    <Col key={index} md={4} sm={6} className="mb-4">
                        <div style={divStyle} >
                            <Card  className="mw-25 intership_card">
                                <Card.Img variant="top" src={intership.thumbnail} alt="Intership"/>
                                <Card.Body className='e_intership_body'>
                                    <Card.Title>{intership.title}</Card.Title>
                                    <Card.Subtitle><h6>{intership.date}</h6></Card.Subtitle>
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
