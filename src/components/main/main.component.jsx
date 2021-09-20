import React from "react";
import { Container, Alert, Row, Col, Image } from "react-bootstrap";

const MainComponent = () => {
  return (
    <Container>
      <Alert variant="danger" className="mb-3 mb-sm-5">
        <Alert.Heading>ما استخدام می کنیم!</Alert.Heading>
        <p>
          مجتمع صنایع غذایی میهن مجموعه ای ایرانی است که در سال ۱۳۵۰ خورشیدی
          توسط ایوب پایداری پایه‌گذاری شد. این مجموعه یکی از بزرگترین
          تولیدکنندگان بستنی و لبنیات در کشور محسوب می‌شود که با نیروی انسانی
          بالغ بر ۱۱۰۰۰ نفر به فعالیت خود در این عرصه ادامه می‌دهد.
          <a href="#0" class="alert-link">
            بیشتر بخوانید
          </a>
          .
        </p>
      </Alert>
      <Row className="g-0 bg-light p-4 mb-3 mb-sm-5">
        <Col xs={12} lg={6} className="mb-4 mb-lg-0">
          <Row>
            <Col>
              <Image
                src="img/mihan4.jpg"
                className="rounded-circle mb-4 mb-lg-0"
                fluid
              />
            </Col>
            <Col>
              <h2>اخبار و رویدادها</h2>
              <p>
                جشنواره بزرگ خانواده میهن ویژه فرزندان کارکنان عزیز گروه صنعتی
                میهن جشنواره بزرگ خانواده میهن ویژه فرزندان کارکنان عزیز گروه
                صنعتی میهن
              </p>
              <a href="#0" class="btn btn-primary">
                بیشتر بخوانید
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6}>
          <Row>
            <Col>
              <Image
                src="img/mihan5.jpg"
                className="rounded-circle mb-4 mb-lg-0"
                fluid
              />
            </Col>
            <Col>
              <h2>اخبار و رویدادها</h2>
              <p>
                همزمان با روز ملی صنعت و معدن اعلام شد؛ فعالیت بیش از ۲۵ هزار
                نفر همکار در گروه صنعتی میهن فعالیت بیش از ۲۵ هزار نفر همکار در
                گروه صنعتی میهن
              </p>
              <a href="#0" class="btn btn-primary">
                بیشتر بخوانید
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;
