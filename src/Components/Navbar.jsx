import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="index.html" className="navbar-brand p-0">
              <h1 className="m-0">AnakPagi UPB</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="/" className="nav-item nav-link active">
                  Home
                </a>
                <a href="https://github.com/dicky10ardiansyah" className="nav-item nav-link">
                  Github
                </a>
                <a href="https://hub.docker.com/u/kamisatoayaka" className="nav-item nav-link">
                  Docker
                </a>
                <a href="https://dickyardiansyahportfolio.netlify.app/" className="nav-item nav-link">
                  Porfolio
                </a>
              </div>
            </div>
          </nav>

          <div className="container-xxl bg-primary hero-header">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated zoomIn">
                    Aplikasi sederhana ini dibuat menggunakan ReactJS
                  </h1>
                  <p className="text-white pb-3 animated zoomIn">
                    Jika kamu ingin sukses maka berbuat baiklah dengan Kedua orang tua, Dosen dan Orang disekitar lingkunganmu.
                  </p>
                  <a
                    href=""
                    className="btn btn-outline-light rounded-pill border-2 py-3 px-5 animated slideInRight"
                  >
                    Lihat source code
                  </a>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                  <img
                    className="img-fluid animated zoomIn"
                    src="assets/img/hero.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
