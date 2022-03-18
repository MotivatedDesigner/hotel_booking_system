import React, { useEffect, useState } from "react";
import { Card, Carousel, OverlayTrigger ,Popover} from "react-bootstrap";
import API from "../Api";

function Home() {
  const [annonces, setAnnonces] = useState([]);
  useEffect(() => {
    API.get(`hotels/annonce`).then((res) => {
      setAnnonces(res.data);
    });
  }, []);

  return (
    <div >
      {annonces.map((val, key1) => {
        return (
          <Carousel key={key1} >
            {val.image.map((img, key2) => {
              return (
                <Carousel.Item key={key2}>
                  <img
                    className="w-100 hotel-images"
                    src={process.env.PUBLIC_URL + "/images/" + img}
                    alt="slide"
                  />
                  <Carousel.Caption className="row gap-1 ">
                    <h2 className=" ">{val.name}</h2>
                    <h3>{val.adresse + " " + val.city}</h3>
                    {val.room.map((room, key3) => {
                      return (
                        <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={    <Popover >
                        <Popover.Body>
                          {room.image.map((roomImg ,key4)=>{
                            return(
                              <img
                              key={key4}
                              className="w-50"
                              src={process.env.PUBLIC_URL + "/images/" + roomImg}
                              alt="slide"
                            /> 
                            )
                          })}
                          {/* <Button variant="primary ">See Room</Button> */}
                        </Popover.Body>
                      </Popover>}
                      >
                        <Card
                          className="col-3 bg-transparent border-0"
                          key={key3}
                          fade
                        >
                          <Card.Img
                            variant="top"
                            src={
                              process.env.PUBLIC_URL +
                              "/images/" +
                              room.image[0]
                            }
                            alt="slide"
                          />
                          <Card.ImgOverlay className="d-none d-lg-block">
                            <Card.Title>
                              Type :<strong>{room.type}</strong>
                            </Card.Title>
                            <Card.Text>
                              Price :<strong>{room.price} Dh</strong>
                            </Card.Text>                          
                            {/* <Button variant="primary ">See Room</Button> */}
                          </Card.ImgOverlay>
                        </Card>
                        </OverlayTrigger>
                      );
                    })}

                    {/* <Button variant="info mt-2">See Hotel</Button> */}
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        );
      })}
    </div>
  );
}

export default Home;
