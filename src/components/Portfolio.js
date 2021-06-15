import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import{GoSearch} from 'react-icons/go';
import "./styles/portfolio.scss";

const Portfolio = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    console.log(props);
    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    return (
        <div className="content">
            <div className="container">
            <div className="col-lg-12 text-center">
               <div className="content_portfolio">
               <h1>
                PORTFO<span>LIO</span>
                </h1>
                <h4>
                Qilgan ishlarimdan namunalar
                </h4>
                <p>
                “Yaratuvchanlik – bu aqlning vaqtichog’lik qilishidir” 
              </p>
              <h6 className='text-end'>Albert Einshtein</h6>
                <a href='https://hh.uz/resume/c59a57f4ff07f18f700039ed1f47784d4e3642' className="btn btn-qora" download>Cv Yuklash</a>
                <a href='https://t.me/React_js_UZB' className="btn btn-sariq">Men bilan Bog'lanish</a>
              
               </div>
            </div>
            
             </div>
             
             
             <div className="container">
             <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            All
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Html and Css
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
          Javascript
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
           React
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
          <Col xl="3" lg="4" md="6" col="12">
          <div className="card my-3">
              <img src="/img/pic-6.jpg" alt="" />
              <a href="https://portfoliowebsite3.netlify.app/" className="layer">
                  <h3>Jizzax Brower</h3>
                 <span><GoSearch/></span>
              </a>
          </div>
        </Col>
        <Col xl="3" lg="4" md="6" col="12">
          <div className="card my-3">
              <img src="/img/pic-6.jpg" alt="" />
              <a href="https://projectwebsite2.netlify.app/" className="layer">
                  <h3>PDP Storm</h3>
                 <span><GoSearch/></span>
              </a>
          </div>
        </Col>
        <Col xl="3" lg="4" md="6" col="12">
          <div className="card my-3">
              <img src="/img/pic-6.jpg" alt="" />
              <a href="https://maxwayportfolio.netlify.app/" className="layer">
                  <h3>Max-wey</h3>
                 <span><GoSearch/></span>
              </a>
          </div>
        </Col>
        <Col xl="3" lg="4" md="6" col="12">
        <div className="card my-3">
            <img src="/img/pic-6.jpg" alt="" />
            <a href="https://calculatorresponsive.netlify.app/" className="layer">
                <h3>Calculyator</h3>
               <span><GoSearch/></span>
            </a>
        </div>
      </Col>   
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
          <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://portfoliowebsite3.netlify.app/" className="layer">
                      <h3>Jizzax Brower</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://projectwebsite2.netlify.app/" className="layer">
                      <h3>PDP Storm</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://maxwayportfolio.netlify.app/" className="layer">
                      <h3>Max-wey</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
           
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
          <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://calculatorresponsive.netlify.app/" className="layer">
                      <h3>Calculyator</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>           
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
          <h1>yaqin kunlarda insha allox</h1>
           
          </Row>
        </TabPane>
      </TabContent>
             </div>
        </div>
    );
};

export default Portfolio;