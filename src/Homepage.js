import react from 'react';
import './styles/Homepage.css';
import Header from './Header.js';
import Footer from './Footer.js';

const Homepage = () => {
    return (
        <div className="App">
            <Header />
            <div className="App-homepage-banner">
                <div className="App-breakpoint App-grid-2">
                    <div className="App-banner-caption">
                        <h1>Hi! I Am<br></br><span>Cigognini Matteo</span></h1>
                        <p>I'm a Web Developer & Designer</p>
                        <button id="App-hire-me-btn">Hire me</button>
                    </div>
                    <div className="App-banner-image"></div>
                </div>
            </div>
            <section className="App-services-section">
                <div className="App-breakpoint">
                    <h3 className="App-section-title">My <span>Services</span></h3>
                    <div className="App-services-container">
                        <div className="App-service-item bg-color-3">
                            <div className="App-service-description">
                                <div className="App-service-icon bg-color-1 color-white"><i className="far fa-window-maximize"></i></div>
                                <h2><span>Web</span> Development</h2>
                                <p>I build dedicated websites for individuals and companies, from portfolios to e-commerce web apps</p>
                            </div>
                            <div className="App-service-image"></div>
                        </div>
                        <div className="App-service-item bg-color-3 mar-top-4">
                            <div className="App-service-image"></div>
                            <div className="App-service-description">
                                <div className="App-service-icon bg-color-1 color-white"><i className="fas fa-mobile"></i></div>
                                <h2>Mobile <span>Apps</span></h2>
                                <p>I build dedicated websites for individuals and companies, from portfolios to e-commerce web apps</p>
                            </div>
                        </div>
                        <div className="App-service-item bg-color-3 mar-top-4">
                            <div className="App-service-description">
                                <div className="App-service-icon bg-color-1 color-white"><i className="fas fa-database"></i></div>
                                <h2><span>Database</span> Manager</h2>
                                <p>I build dedicated websites for individuals and companies, from portfolios to e-commerce web apps</p>
                            </div>
                            <div className="App-service-image"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="App-works-section">
                <div className="App-breakpoint">
                    <h3 className="App-section-title">My <span>Works</span></h3>
                    <div className="App-works-container App-grid-2">
                        <div className="App-work-item bg-color-1">
                            <h3 className="color-2">Sognando Casa</h3>
                            <h4 className="color-2">2019-2021</h4>
                            <p className="color-white">E-commerce platforms for the sale of building materials and household items</p>
                            <div className="App-work-sognando-casa App-work-preview"></div>
                        </div>
                        <div className="App-work-item bg-color-2">
                            <h3 className="color-1">Retailer Design</h3>
                            <h4 className="color-1">2019-2021</h4>
                            <p className="color-white">Platform for creating online stores dedicated to all types of items</p>
                            <div className="App-work-preview"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="App-works-section">
                <div className="App-breakpoint">
                    <h3 className="App-section-title">My <span>Projects</span></h3>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Homepage;