import React from "react";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";

const JumbtronComponent = () => {
  return (
    <div className="bg-light py-3 py-sm-5">
      <Container>
        <Row align-items-center>
          <Col xs={12} lg={6} mb="3" mb-lg="0">
            <Carousel>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="img/mihan1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="img/mihan2.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  className="d-block w-100"
                  src="img/mihan3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
            <h1 className="display-1">فروشگاه میهن</h1>
            <p className="lead">
              هلدینگ میهن مجموعه ای از محصولات میهن از جمله انواع بستنی های تکی،
              خانواده و کترینگ و انواع آبمیوه ها و نوشیدنی های فروتلند و همچنین
              لبنیات را ارائه می دهد.
            </p>
            <a href="#0" class="btn btn-lg btn-primary me-2">
              بیشتر بخوانید
            </a>
            <a href="#0" class="btn btn-lg btn-outline-primary">
              با ما تماس بگیرید
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JumbtronComponent;
