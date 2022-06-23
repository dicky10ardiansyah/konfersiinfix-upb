import React, { Component } from "react";

class Team extends Component {
  render() {
    return(
    <div>
        <div className="container-xxl py-6">
            <div className="container">
                <div className="mx-auto text-center wow fadeInUp" data-wow-delay="0.1s" >
                    <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">Team kami</div>
                    <h2 className="mb-5">Yuk! kenalan dangan kami</h2>
                </div>
                <div className="row g-4 d-flex justify-content-center">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <h5>Moch. Dicky A</h5>
                            <p className="mb-4">npm: 180210023</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="assets/img/diki.jpg" alt="" />
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href="https://www.instagram.com/stellalambort/"><i class="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href="https://www.linkedin.com/in/dicky-ardiansyah-7b7944209/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <h5>Encik Yoega Renaldi</h5>
                            <p className="mb-4">npm: 180210014</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="assets/img/enchik.jpeg" alt="" />
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i class="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <h5>Raihan</h5>
                            <p className="mb-4">npm: -</p>
                            <img className="img-fluid rounded-circle w-100 mb-4" src="assets/img/raihan.jpg" alt="" />
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i class="fab fa-instagram"></i></a>
                                <a className="btn btn-square text-primary bg-white m-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Team;
