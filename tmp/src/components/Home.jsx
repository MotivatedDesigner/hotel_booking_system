import React, { useEffect, useState } from "react";
import {Card ,Button, Carousel } from "react-bootstrap";
import API from "../Api";

function Home() {
  const [annonces, setAnnonces] = useState([]);
  useEffect(() => {
    API.get(`hotels/annonce`).then((res) => {
      setAnnonces(res.data);
    });
  }, []);

  console.log(annonces);

  return (
    <div className="m-auto">
      {annonces.map((val, key) => {
        return (
          <Card className="text-center" key={key}>
            {/* <Card.Header>{val.name}</Card.Header> */}
            <Card.Body>
              <Card.Title> {val.name}</Card.Title>
              <Card.Text>{val.adresse + " " + val.city}</Card.Text>
              <div className="row gap-3">
                <Carousel className="col-md " fade>
                  {val.image.map((img) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="w-100"
                          src={process.env.PUBLIC_URL + "/images/" + img}
                          alt="slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel >
                {/* <Carousel className="col-md"> */}
                <div className="col-md row gap-3 ">
                  <h2>Rooms</h2>
                  {val.room.map((room, key) => {
                    return (
                      // <Carousel.Item>
                        <Card className="col-5" key={key}>
                          <Card.Body>
                    
                          <Carousel fade>
                            {room.image.map((image) => {
                              return (
                                <Carousel.Item>
                                  <img
                                    className="w-100"
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/" +
                                      image
                                    }
                                    alt="slide"
                                  />
                                </Carousel.Item>
                              );
                            })}
                          </Carousel>
                          <Card.Title> {room.type}</Card.Title>
                        <Card.Text>{ room.price}</Card.Text>
                          <Button variant="primary">Go somewhere</Button>
            </Card.Body>
                        </Card>
                      // </Carousel.Item>
                    );
                  })}
                  </div>
                {/* </Carousel> */}
              </div>
              <Button variant="info">Go somewhere</Button>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
