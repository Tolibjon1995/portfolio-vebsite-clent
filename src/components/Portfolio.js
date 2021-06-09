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
                portfo<span>lio.</span>
                </h1>
                <h4>
                Check out some of my portfolios
                </h4>
                <p>
                I've worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.
                </p>
                <button type="button" className="btn btn-qora">Download Cv</button>
                <button type="button" className="btn btn-sariq">Hire Me</button>
              
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
                  <img src="/img/pic-1.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Home page</h3>
                      <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-2.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                  <h3>Landing page</h3>
                  <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-3.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                  <h3>Shopping </h3>
                  <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-4.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Single page</h3>
                     <span><GoSearch/></span>
                    
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-5.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Web design</h3>
                  <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
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
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
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
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
            <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
           
           
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
          <Col xl="3" lg="4" md="6" col="12">
              <div className="card my-3">
                  <img src="/img/pic-6.jpg" alt="" />
                  <a href="https://t.me/baxtiyor9703" className="layer">
                      <h3>Grafic design</h3>
                     <span><GoSearch/></span>
                  </a>
              </div>
            </Col>
           
          </Row>
        </TabPane>
      </TabContent>
             </div>
        </div>
    );
};

export default Portfolio;