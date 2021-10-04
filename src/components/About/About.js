import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './About.css'

const About = () => {
    return (
        <div>
            <MenuBar/>
            <div className="row d-flex justify-content-center mb-5  align-items-center">
            <h1 className="text-center p-3 fw-bold">About</h1>
                <div className="col-md-6">
                    <div className="div">
                            <h2 className="text-primary fw-bold ">About Us</h2>
                            <p>Students have individual learning paths in “folders”. When a student works on a folder, they engage in instruction through video, audio, animation, and interaction writing tools.</p>
                            <p> myON is an online library of more than 10,000 enhanced digital books with multimedia supports, real-time reporting and assessments and embedded close reading tools. Students receive book recommendations based on their interests and reading abilities</p>
                            <p>Students have access to over 400 eBooks in English and Spanish. Each book has a corresponding quiz to monitor student’s comprehension.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="about-image" src={'https://coaching.thimpress.com/demo-life-coaching/wp-content/uploads/sites/46/2016/04/round-slider1-e1473415440978-min.jpg'} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;