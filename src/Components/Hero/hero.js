import React from 'react';

function Hero() {
    return (

        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative" data-aos="fade-up" data-aos-delay="500">
                <h1>Welcome to <br /> <strong> Tattoo Studio </strong></h1>
                <h2>Meet the new style perfection</h2>
                <a href="#about" className="btn-get-started scrollto">Make an Appointment</a>
            </div>
        </section>

    );
}


export default Hero;