function Contact() {
    return(
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                    <br />
                    <h2>CONTACT US</h2>
                    <br />
                </div>

                <div className="row" data-aos="fade-up">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-map"></i>
                            <h3>Our Address</h3>
                            <p>A108 Main Street, Colombo, Sri Lanka</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>tattoostudio@developer101.com</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p>+94 778 670 303</p>
                        </div>
                    </div>

                </div>

                <div className="row" data-aos="fade-up">

                </div>

            </div>
        </section>
    );
    
}

export default Contact;