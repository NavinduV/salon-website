function About() {
    return (
        <section id="about" className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
                            <img src="assets/image/2.jpg" className="img-fluid" alt="image" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
                            <h2>WHO WE ARE</h2>
                            <p className="fst-italic">
                            Tattoo Studio offering unique, bespoke pieces, our reviews speak for themselves as one of the top rated tattoo shops in the sri lanka. 
                            We pride ourselves on our reputation and top quality service.
                            Our staff are constantly evolving in the tattoo industry by learning new methods & ideologies and appreciating the artwork of others.
                            Our tattoo shop is an extension of who we are.
                            </p>
                
                            <ul>
                                <li><i className="bi bi-check-circle"> Fully customizable art</i></li>
                                <li><i className="bi bi-check-circle"> Quality assurence</i></li>
                                <li><i className="bi bi-check-circle"> Ensure customer satisfaction</i></li>
                            </ul>
                            <p className="fst-italic">
                            We are not here just for the money, as our reputation is our most valuable asset, 
                            and we want all our clients to enjoy the best possible experience through our quality workmanship and excellent customer service.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
    );
    
}

export default About;