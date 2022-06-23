import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Kami kuliah disini nii ...</h5>
                        <p><i className="fa fa-map-marker-alt me-3"></i> Jl. Raden Patah No.12A, Lubuk Baja Kota, Kec. Lubuk Baja, Kota Batam, Kepulauan Riau 29444</p>
                        <p><i className="fa fa-phone-alt me-3"></i> 0857-7571-0743</p>
                        <p><i className="fa fa-university"></i> Universitas Putera Batam (Nagoya)</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                </div>
            </div><br />
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">AnakPagiUPB</a>, All Right Reserved. 
							
							Designed By <a className="border-bottom" href="https://htmlcodex.com">Dicky Ardiansyah</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
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

export default Footer;
