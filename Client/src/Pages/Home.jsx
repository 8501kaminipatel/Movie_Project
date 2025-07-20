import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  const featuredMovie = {
    title: "Inception",
    description: "A mind-bending thriller that blurs the line between dream and reality.",
    image: "https://www.shutterstock.com/image-vector/cinema-background-movie-projector-film-600nw-1880122036.jpg"
  };

  const categories = [
    { name: "LOREM IPSUM", image: "https://t4.ftcdn.net/jpg/02/12/52/91/360_F_212529193_YRhcQCaJB9ugv5dFzqK25Uo9Ivm7B9Ca.jpg" },
    { name: "WALK ALONE", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQtFm2w1eAinQAdjRE2B21r9sL2wPdPTTxog&s" },
    { name: "JUNGLE BOOK", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUK5ZbmdhnArY6qkFvcp6ig-up9RmO8Kqew&s" },
    { name: "HORROR", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnK_7KwT_J6Omfpjd3Rpv7hYKDOhpDIlNo4g&s" },
  ];

  return (
    <div className="mb-2">

      <div className="bg-dark text-white py-5 mt-3">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>{featuredMovie.title}</h1>
              <p>{featuredMovie.description}</p>
              <Button variant="danger">Watch Now</Button>
            </Col>
            <Col md={6}>
              <img
                src={featuredMovie.image}
                alt={featuredMovie.title}
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Categories */}
      <Container className="py-5">
        <h2 className="mb-4 text-center text-danger">Browse by Genre</h2>
        <Row>
          {categories.map((cat, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={cat.image} style={{height:"250px"}}/>
                <Card.Body className="text-center">
                  <Card.Title>{cat.name}</Card.Title>
                  <Button variant="outline-none bg-danger text-white" size="sm">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 text-center">
        <Container>
          <p className="mb-0 text-danger">© 2025 MovieMania. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
