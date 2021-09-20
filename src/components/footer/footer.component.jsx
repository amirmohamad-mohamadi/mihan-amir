import React from "react";
import { Container, Row } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="bg-light float-left">
      <small>
        <Container className="py-3 py-sm-5">
          <Row>
            <div className="col-12 col-sm-6 col-md-3">
              <h6>لینک‌های سریع</h6>
              <ul className="list-unstyled" >
                <li>
                  <a href="index.html">خانه</a>
                </li>
                <li>
                  <a href="services.html">خدمات</a>
                </li>
                <li>
                  <a href="about.html">درباره‌ما</a>
                </li>
                <li>
                  <a href="team.html">گروه‌ما</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3 ">
              <h6>اطلاعات مربوطه درباره مجموعه</h6>
              <ul className="list-unstyled">
                <li className="">
                  <a href="0">اطلاعات مجاز</a>
                </li>
                <li>
                  <a href="#0">فرصت‌های شغلی</a>
                </li>
                <li>
                  <a href="#0">سوالات متداول</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h6>ما را دنبال کنید</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#0">
                    <i className="fa fa-facebook">فیسبوک</i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-instagram"></i>اینستاگرام
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-twitter"></i> توئیتر
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-youtube"></i> یوتیوب
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-linkedin"></i> لینکدین
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h6>مکان شرکت</h6>
              <address>
                <strong>شرکت میهن</strong>
                <br />
                اسلامشهر <br />
                کد پستی و شهر
                <br />
                <i className="fas fa-fw fa-phone"></i>
                <a href="tel:+1234567890">18111 — 18999</a>
                <br />
                <i className="fas fa-fw fa-envelope"></i>
                <a href="mailto:info@domain.com">info@domain.com</a>
              </address>
            </div>
          </Row>
        </Container>
        <ul class="list-inline mt-2 mb-0 text-center">
          <li class="list-inline-item">
            تمامی حقوق این سایت برای شرکت میهن محفوظ است
          </li>
        </ul>
      </small>
    </footer>
  );
};

export default FooterComponent;
