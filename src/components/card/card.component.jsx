import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const CardComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Card>
              <Card.Header>
                <small>
                  منتشرشده: <time datetime="1400-01-01">01/01/1400</time>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>اخبار جدید</Card.Title>
                <Card.Text>
                  رکورد جدید دیلی مارکت در صنعت خرده فروشی کشور ثبت رکورد جدید
                  دیلی مارکت در صنعت خرده فروشی کشورثبت رکورد جدید دیلی مارکت در
                  صنعت خرده فروشی کشور
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-grid">
                <a href="#0" className="btn btn-primary">
                  بیشتر بخوانید
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Card>
              <Card.Header>
                <small>
                  منتشرشده: <time datetime="1400-01-01">01/01/1400</time>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>اخبار جدید</Card.Title>
                <Card.Text>
                  بازدید هیات رسمی وزارت کشاورزی عراق از میهن بازدید هیات رسمی
                  وزارت کشاورزی عراق از میهنبازدید هیات رسمی وزارت کشاورزی عراق
                  از میهن بازدید هیات رسمی وزارت کشاورزی عراق
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-grid">
                <a href="#0" className="btn btn-primary">
                  بیشتر بخوانید
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Card>
              <Card.Header>
                <small>
                  منتشرشده: <time datetime="1400-01-01">01/01/1400</time>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>اخبار جدید</Card.Title>
                <Card.Text>
                  آیین تقدیر از بازنشستگان گروه صنعتی میهن در آستانه پنجاهمین
                  سال آغاز به کار میهن و نوروز 1400؛ آیین تقدیر از بازنشستگان
                  گروه صنعتی میهن برگزار شدآیین تقدیر از بازنشستگان گروه صنعتی
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-grid">
                <a href="#0" className="btn btn-primary">
                  بیشتر بخوانید
                </a>
              </Card.Footer>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="mb-3">
            <Card>
              <Card.Header>
                <small>
                  منتشرشده: <time datetime="1400-01-01">01/01/1400</time>
                </small>
              </Card.Header>
              <Card.Body>
                <Card.Title>اخبار جدید</Card.Title>
                <Card.Text>
                  همزمان با روز ملی صنعت و معدن اعلام شد؛ فعالیت بیش از ۲۵ هزار
                  همزمان با روز ملی صنعت و معدن اعلام شد؛ فعالیت بیش از ۲۵ هزار
                  نفر همکار در گروه صنعتی میهننفر همکار در گروه صنعتی میهن
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-grid">
                <a href="#0" className="btn btn-primary">
                  بیشتر بخوانید
                </a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardComponent;
